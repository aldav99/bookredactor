import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

import store from '../store'

import { API_KEY } from './ApiConst'

const initialState = {
    isLoading: false,
    isError: false,
    error: null,
    entries: []
}

const ROOT_URL = 'https://chapters-74b6.restdb.io/rest/chapters'

export const fetchChapters = createAsyncThunk(
    'chapters/fetchAll',
    async () => {
        const response = await axios({
            method: "GET",
            url: 'https://chapters-74b6.restdb.io/rest/chapters',
            headers: {
                'x-apikey': API_KEY
            }
        })

        return response.data
    }
)

export const fetchOneChapter = createAsyncThunk(
    'chapters/fetchOne',
    async (objectID) => {
        const response = await axios({
            method: "GET",
            url: `https://chapters-74b6.restdb.io/rest/chapters/${objectID}`,
            headers: {
                'x-apikey': API_KEY
            }
        })

        return response.data
    }
)

const httpClient = axios.create({
    headers: {
        'x-apikey': API_KEY
    }
});

export const toggleChapterReq = createAsyncThunk(
    'chapters/toggleChapterReq',
    async (chapter) => {
        const response = await httpClient.put(`https://chapters-74b6.restdb.io/rest/chapters/${chapter._id}`, {
            ...chapter,
            completed: !chapter.completed
        })

        return response.data
    }
)

export const addNumberOfSections = createAsyncThunk(
    'chapters/addNumberOfSections',
    async (chapter) => {
        const response = await httpClient.put(`https://chapters-74b6.restdb.io/rest/chapters/${chapter._id}`, {
            ...chapter,
            numberOfSections: chapter.numberOfSections + 1
        })

        return response.data
    }
)

export const addNumberOfCompletedSections = createAsyncThunk(
    'chapters/addNumberOfCompletedSections',
    async (chapter) => {
        const response = await httpClient.put(`https://chapters-74b6.restdb.io/rest/chapters/${chapter._id}`, {
            ...chapter, completed: (chapter.numberOfSections - chapter.numberOfCompletedSections === 1),
            numberOfCompletedSections: chapter.numberOfCompletedSections + 1
        })

        return response.data
    }
)

export const subtractNumberOfCompletedSections = createAsyncThunk(
    'chapters/subtractNumberOfCompletedSections',
    async (chapter) => {
        const response = await httpClient.put(`https://chapters-74b6.restdb.io/rest/chapters/${chapter._id}`, {
            ...chapter,
            completed: false,
            numberOfCompletedSections: chapter.numberOfCompletedSections - 1
        })

        return response.data
    }
)



export const uploadChapters = createAsyncThunk(
    'chapters/uploadChapter',
    async (chapter) => {
        const response = await httpClient.post('https://chapters-74b6.restdb.io/rest/chapters', {
            text: chapter.text,
            completed: chapter.completed,
            numberOfSections: 0,
            numberOfCompletedSections: 0
        })

        return response.data
    }
)


const chaptersSlice = createSlice({
    name: 'chapters',
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [fetchChapters.pending]: (state, action) => ({
            ...state,
            isLoading: true
        }),
        [fetchChapters.fulfilled]: (state, action) => ({
            ...initialState,
            entries: action.payload
        }),
        [uploadChapters.fulfilled]: function (state, action) {
            console.log('action.payload-----', action.payload)
            return {
                ...state,
                entries: state.entries.concat({ _id: action.payload._id, text: action.payload.text, completed: action.payload.completed, numberOfSections: action.payload.numberOfSections, numberOfCompletedSections: action.payload.numberOfCompletedSections })
            }
        },
        [toggleChapterReq.fulfilled]: (state, action) => {
            return {
                ...state,
                entries: state.entries.map(
                    (chapter, idx) => (
                        chapter._id === action.payload._id
                            ? { ...chapter, completed: action.payload.completed }
                            : chapter
                    )
                )
            }
        },
        [addNumberOfSections.fulfilled]: (state, action) => {
            return {
                ...state,
                entries: state.entries.map(
                    (chapter, idx) => (
                        chapter._id === action.payload._id
                            ? { ...chapter, numberOfSections: action.payload.numberOfSections }
                            : chapter
                    )
                )
            }
        },
        [addNumberOfCompletedSections.fulfilled]: (state, action) => {
            return {
                ...state,
                entries: state.entries.map(
                    (chapter, idx) => (
                        chapter._id === action.payload._id
                            ? { ...chapter, completed: action.payload.completed, numberOfCompletedSections: action.payload.numberOfCompletedSections }
                            : chapter
                    )
                )
            }
        },
        [subtractNumberOfCompletedSections.fulfilled]: (state, action) => {
            return {
                ...state,
                entries: state.entries.map(
                    (chapter, idx) => (
                        chapter._id === action.payload._id
                            ? { ...chapter, completed: action.payload.completed, numberOfCompletedSections: action.payload.numberOfCompletedSections }
                            : chapter
                    )
                )
            }
        }
    }
})

export default chaptersSlice.reducer

