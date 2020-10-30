import { createStore, compose, applyMiddleware } from 'redux'

import rootReducer from './reducers'

import APIMiddleware from './middleware/API'

import thunkMiddleware from 'redux-thunk'


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)


export default store;