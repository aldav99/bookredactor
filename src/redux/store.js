import { createStore } from 'redux'
import { todosReducer } from './reducers/todos'

import rootReducer from './reducers'

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// export default store;

// const todosReducer = function (state, action) {
//     switch (action.type) {
//         case 'TOGGLE_TODO':
//             return state.map(
//                 (todo, idx) => (
//                     idx === action.idx
//                         ? { ...todo, completed: !todo.completed }
//                         : todo
//                 )
//             )
//         case 'ADD_TODO':
//             return state.concat({ text: action.text, completed: false })
//         default:
//             return state
//     }
// }

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;