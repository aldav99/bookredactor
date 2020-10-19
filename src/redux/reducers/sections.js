const initialState = []


export const sections = function (state = initialState, action) {
    console.log('state.todos--------------', state.todos)
    switch (action.type) {
        case 'ADD_SECTION':
            return state.concat({ id: action.chapter.id, text: action.text, completed: false })
        case 'TOGGLE_SECTION':
            return state.map(
                (section, idx) => (
                    (section === action.section)
                        ? { ...section, completed: !section.completed }
                        : section
                )
            )
        default:
            return state
    }
}

