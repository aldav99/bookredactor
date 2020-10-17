const initialState = [{ text: 'First task', completed: false, sections: [] }]


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
            return state.concat({ text: action.text, completed: false, sections: [] })
        case 'ADD_SECTION':
            return state.map(
                (todo, idx) => (
                    idx === action.idx
                        ? { ...todo, sections: todo.sections.concat({ text: action.text, completed: false }) }
                        : todo
                )
            )
        case 'TOGGLE_SECTION':
            return state.map(
                (todo, idx) => (
                    idx === action.chapterIdx
                        ? { ...todo, sections: findSection(todo.sections, action.idx) }
                        : todo
                )
            )
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