import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

import store from '../store'
import { addNumberOfSections } from './chapters'

const initialState = {
    isLoading: false,
    isError: false,
    error: null,
    entries: []
}

export const fetchSections = createAsyncThunk(
    'sections/fetchAll',
    async () => {
        const response = await axios({
            method: "GET",
            url: 'https://chapters-74b6.restdb.io/rest/sections',
            headers: {
                'x-apikey': '5f98ec2b231ba42851b49e54'
            }
        })

        return response.data
    }
)

export const fetchOneSection = createAsyncThunk(
    'sections/fetchOne',
    async (objectID) => {
        const response = await axios({
            method: "GET",
            url: `https://chapters-74b6.restdb.io/rest/sections/${objectID}`,
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

export const toggleSectionReq = createAsyncThunk(
    'sections/toggleSectionReq',
    async (section) => {
        const response = await httpClient.put(`https://chapters-74b6.restdb.io/rest/sections/${section._id}`, {
            ...section,
            completed: !section.completed
        })

        return response.data
    }
)

export const uploadSection = createAsyncThunk(
    'sections/uploadSection',
    async (section) => {
        const response = await httpClient.post('https://chapters-74b6.restdb.io/rest/sections', {
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

