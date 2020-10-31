import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'

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
        })
    }
})

export const { toggleChapter, addChapter } = chaptersSlice.actions
export default chaptersSlice.reducer