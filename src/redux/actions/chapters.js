import * as chaptersActions from '../actionType/chapters'
import axios from 'axios'

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

// export const fetchChapters = () => ({
//     [API_CALL]: {
//         endpoint: '/chapters',
//         method: 'GET',
//         types: [
//             chaptersActions.FETCH_CHAPTER_REQUEST,
//             chaptersActions.FETCH_CHAPTER_SUCCESS,
//             chaptersActions.FETCH_CHAPTER_FAILURE
//         ]
//     }
// })

export const fetchChapters = () => (
    (dispatch) => {
        dispatch({
            type: chaptersActions.FETCH_CHAPTER_REQUEST
        })

        return axios({
            method: "GET",
            url: 'https://chapters-74b6.restdb.io/rest/chapters',
            headers: {
                'x-apikey': '5f98ec2b231ba42851b49e54'
            }
        }).then(res => dispatch({
            type: chaptersActions.FETCH_CHAPTER_SUCCESS,
            response: res.data
        })).catch(error => dispatch({
            type: chaptersActions.FETCH_CHAPTER_FAILURE,
            error
        }))
    }
)