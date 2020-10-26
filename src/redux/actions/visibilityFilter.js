import * as filtersActions from '../actionType/visibilityFilter'


export const setFilter = (filter) => ({
    type: filtersActions.SET_FILTER,
    filter
})
