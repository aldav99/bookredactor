import * as chaptersActions from '../actionType/visibilityFilter'

const initialState = 'SHOW_ALL'

export const visibilityFilter = function (state = initialState, action) {
    switch (action.type) {
        case chaptersActions.SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}

