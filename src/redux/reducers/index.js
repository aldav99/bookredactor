import { combineReducers } from 'redux'

import chapters from '../slices/chapters'

import { visibilityFilter } from './visibilityFilter'
import sections from '../slices/sections'

import undoable from 'redux-undo'

export default combineReducers({
    chapters: undoable(chapters),
    visibilityFilter,
    sections: undoable(sections)
})