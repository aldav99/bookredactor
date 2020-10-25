import * as chaptersActions from '../actionType/chapters'

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