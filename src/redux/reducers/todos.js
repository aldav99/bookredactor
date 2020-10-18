const initialState = [{ id: 1, text: 'First task', completed: false, sections: [] }]


export const todos = function (state = initialState, action) {
    switch (action.type) {
        case 'TOGGLE_TODO':
            return state.map(
                (todo, idx) => (
                    idx === action.idx
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            )
        case 'ADD_TODO':
            return state.concat({ id: state.length + 1, text: action.text, completed: false, sections: [] })
        default:
            return state
    }
}

function findSection(sections, idxSections) {
    return sections.map(
        (section, idx) => (
            idx === idxSections
                ? { ...section, completed: !section.completed }
                : section
        )
    )
}