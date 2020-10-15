const initialState = [{ text: 'First task' }]

// export const todosReducer = function (state = initialState, action) {
//     switch (action.type) {
//         case 'ADD_TODO':
//             return state.concat([action.text])
//         default:
//             return state
//     }
// }

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
            return state.concat({ text: action.text, completed: false })
        default:
            return state
    }
}