import { combineReducers } from 'redux'

import { todos } from './todos'
// import { visibilityFilter, visibilityFilterSection } from './visibilityFilter'

import { visibilityFilter } from './visibilityFilter'
import { sections } from './sections'

export default combineReducers({
    todos,
    visibilityFilter,
    sections
})