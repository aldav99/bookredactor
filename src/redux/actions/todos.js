import * as todosActions from '../actionsType/todos'

export const addTodo = (text) => ({
    type: todosActions.ADD_TODO,
    text
})

export const toggleTodo = (idx) => ({
    type: todosActions.TOGGLE_TODO,
    idx
})