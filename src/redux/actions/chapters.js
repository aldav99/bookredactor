import * as chaptersActions from '../actionType/chapters'

import { API_CALL } from '../middleware/API'

export const toggleChapter = (chapter) => ({
    type: chaptersActions.TOGGLE_CHAPTER,
    chapter
})

export const addChapter = (text) => ({
    type: chaptersActions.ADD_CHAPTER,
    text
})

export const addSection = (text, chapter) => ({
    type: chaptersActions.ADD_SECTION,
    text,
    chapter
})

export const toggleSection = (section, chapter) => ({
    type: chaptersActions.TOGGLE_SECTION,
    section,
    chapter
})

export const fetchChapters = () => ({
    [API_CALL]: {
        endpoint: '/chapters',
        method: 'GET',
        types: [
            chaptersActions.FETCH_CHAPTER_REQUEST,
            chaptersActions.FETCH_CHAPTER_SUCCESS,
            chaptersActions.FETCH_CHAPTER_FAILURE
        ]
    }
})