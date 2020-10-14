const initialState = [{ text: 'First task' }]

export const todosReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat([action.text])
        default:
            return state
    }
}