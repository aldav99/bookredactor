import { combineReducers } from 'redux'

import { chapters } from './chapters'

import { visibilityFilter } from './visibilityFilter'
import { sections } from './sections'

export default combineReducers({
    chapters,
    visibilityFilter,
    sections
})