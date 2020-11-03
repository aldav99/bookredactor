import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

import store from '../store'

const initialState = {
    isLoading: false,
    isError: false,
    error: null,
    entries: []
}

export const fetchChapters = createAsyncThunk(
    'chapters/fetchAll',
    async () => {
        const response = await axios({
            method: "GET",
            url: 'https://chapters-74b6.restdb.io/rest/chapters',
            headers: {
                'x-apikey': '5f98ec2b231ba42851b49e54'
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
                'x-apikey': '5f98ec2b231ba42851b49e54'
            }
        })

        return response.data
    }
)

const httpClient = axios.create({
    headers: {
        'x-apikey': '5f98ec2b231ba42851b49e54'
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
        toggleChapter(state, action) {
            return {
                ...state,
                entries: state.entries.map(
                    (chapter, idx) => (
                        idx === action.payload
                            ? { ...chapter, completed: !chapter.completed }
                            : chapter
                    )
                )
            }
        },
        addChapter(state, action) {
            // const res = uploadChapters()
            // console.log('-----------PRIVET---------------')
            // console.log(res)
            // console.log('-----------PRIVET---------------')

            return {
                ...state,
                entries: state.entries.concat({ id: state.length + 1, text: action.payload, completed: false, numberOfSections: 0, numberOfCompletedSections: 0 })
            }
        }
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
        }
    }
})

export const { toggleChapter, addChapter } = chaptersSlice.actions
export default chaptersSlice.reducer

