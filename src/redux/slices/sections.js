import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


import { httpClient } from './ApiConst'

const initialState = {
    isLoading: false,
    isError: false,
    error: null,
    entries: []
}

export const fetchSections = createAsyncThunk(
    'sections/fetchAll',
    async () => {
        const response = await httpClient
            .get('/sections')

        return response.data
    }
)

export const fetchOneSection = createAsyncThunk(
    'sections/fetchOne',
    async (objectID) => {
        const response = await httpClient
            .get(`/sections/${objectID}`)

        return response.data
    }
)

export const toggleSectionReq = createAsyncThunk(
    'sections/toggleSectionReq',
    async (section) => {
        const response = await httpClient.put(`/sections/${section._id}`, {
            ...section,
            completed: !section.completed
        })

        return response.data
    }
)

export const uploadSection = createAsyncThunk(
    'sections/uploadSection',
    async (section) => {
        const response = await httpClient.post('/sections', {
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
            console.log('action.payload.sections-----', action.payload)
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

