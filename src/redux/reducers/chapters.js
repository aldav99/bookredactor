const initialState = [{ id: 1, text: 'First task', completed: false, numberOfSections: 0 }]


export const chapters = function (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_CHAPTER':
            return state.map(
                (chapter, idx) => (
                    chapter === action.chapter
                        ? { ...chapter, completed: !chapter.completed }
                        : chapter
                )
            )
        case 'ADD_CHAPTER':
            return state.concat({ id: state.length + 1, text: action.text, completed: false, numberOfSections: 0 })
        default:
            return state
    }
}

