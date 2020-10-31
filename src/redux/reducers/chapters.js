import * as chaptersActions from '../actionType/chapters'

const initialState = [{ id: 1, text: 'First task', completed: false, numberOfSections: 0, numberOfCompletedSections: 0 }]


export const chapters = function (state = initialState, action) {
    switch (action.type) {
        case chaptersActions.TOGGLE_CHAPTER:
            return state.map(
                (chapter, idx) => (
                    chapter === action.chapter
                        ? { ...chapter, completed: !chapter.completed }
                        : chapter
                )
            )
        case chaptersActions.ADD_CHAPTER:
            return state.concat({ id: state.length + 1, text: action.text, completed: false, numberOfSections: 0, numberOfCompletedSections: 0 })
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
        default:
            return state
    }
}

