import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

import { API_KEY, ROOT_URL } from './ApiConst'

const initialState = {
    isLoading: false,
    isError: false,
    error: null,
    entries: []
}

const httpClient = axios.create({
    headers: {
        'x-apikey': API_KEY
    }
});

export const fetchSections = createAsyncThunk(
    'sections/fetchAll',
    async () => {
        const response = await httpClient
        .get(`${ROOT_URL}sections`)

        return response.data
    }
)

export const fetchOneSection = createAsyncThunk(
    'sections/fetchOne',
    async (objectID) => {
        const response = await httpClient
        .get(`${ROOT_URL}sections/${objectID}`)

        return response.data
    }
)

export const toggleSectionReq = createAsyncThunk(
    'sections/toggleSectionReq',
    async (section) => {
        const response = await httpClient.put(`${ROOT_URL}sections/${section._id}`, {
            ...section,
            completed: !section.completed
        })

        return response.data
    }
)

export const uploadSection = createAsyncThunk(
    'sections/uploadSection',
    async (section) => {
        const response = await httpClient.post(`${ROOT_URL}sections`, {
            text: section.text,
            completed: section.completed,
            chapterId: section.chapterId
        })

        return response.data
    }
)


const sectionsSlice = createSlice({
    name: 'sections',
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [fetchSections.pending]: (state, action) => ({
            ...state,
            isLoading: true
        }),
        [fetchSections.fulfilled]: (state, action) => ({
            ...initialState,
            entries: action.payload
        }),
        [uploadSection.fulfilled]: function (state, action) {
            return {
                ...state,
                entries: state.entries.concat({ _id: action.payload._id, text: action.payload.text, completed: action.payload.completed, chapterId: action.payload.chapterId })
            }
        },
        [toggleSectionReq.fulfilled]: function (state, action) {
            return {
                ...state,
                entries: state.entries.map(
                    (section, idx) => (
                        section._id === action.payload._id
                            ? { ...section, completed: action.payload.completed }
                            : section
                    )
                )
            }
        }
    }
})

export default sectionsSlice.reducer

