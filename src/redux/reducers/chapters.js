import * as chaptersActions from '../actionType/chapters'

const initialState = {
    isLoading: false,
    isError: false,
    error: null,
    entries: []
}


export const chapters = function (state = initialState, action) {
    switch (action.type) {
        case chaptersActions.TOGGLE_CHAPTER:
            return {
                ...state,
                entries: state.entries.map(
                    (chapter, idx) => (
                        chapter === action.chapter
                            ? { ...chapter, completed: !chapter.completed }
                            : chapter
                    )
                )
            }
        case chaptersActions.ADD_CHAPTER:
            return {
                ...state,
                entries: state.entries.concat({ id: state.length + 1, text: action.text, completed: false, numberOfSections: 0, numberOfCompletedSections: 0 })
            }
        case chaptersActions.ADD_SECTION:
            return state.map(
                (chapter, idx) => (
                    chapter === action.chapter
                        ? { ...chapter, numberOfSections: chapter.numberOfSections + 1 }
                        : chapter
                )
            )
        case chaptersActions.TOGGLE_SECTION:
            if (action.section.completed && action.chapter.completed) {
                return state.map(
                    (chapter, idx) => (
                        chapter === action.chapter
                            ? { ...chapter, completed: false, numberOfCompletedSections: chapter.numberOfCompletedSections - 1 }
                            : chapter
                    )
                )
            }
            if (action.section.completed && !(action.chapter.comleted)) {
                return state.map(
                    (chapter, idx) => (
                        chapter === action.chapter
                            ? { ...chapter, numberOfCompletedSections: chapter.numberOfCompletedSections - 1 }
                            : chapter
                    )
                )
            }
            if (!(action.section.completed) && (action.chapter.numberOfSections === action.chapter.numberOfCompletedSections + 1)) {
                return state.map(
                    (chapter, idx) => (
                        chapter === action.chapter
                            ? { ...chapter, completed: true, numberOfCompletedSections: chapter.numberOfCompletedSections + 1 }
                            : chapter
                    )
                )
            }
            if (!(action.section.completed) && !(action.chapter.numberOfSections === action.chapter.numberOfCompletedSections + 1)) {
                return state.map(
                    (chapter, idx) => (
                        chapter === action.chapter
                            ? { ...chapter, numberOfCompletedSections: chapter.numberOfCompletedSections + 1 }
                            : chapter
                    )
                )
            }
        case chaptersActions.FETCH_CHAPTER_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case chaptersActions.FETCH_CHAPTER_SUCCESS:
            return {
                ...initialState,
                entries: action.response
            }
        case chaptersActions.FETCH_CHAPTER_FAILURE:
            return {
                ...state,
                isError: true,
                error: action.error
            }
        default:
            return state
    }
}

