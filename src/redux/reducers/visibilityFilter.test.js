import * as chaptersActions from '../actionType/visibilityFilter'
import { visibilityFilter } from "./visibilityFilter"
import { setFilter } from "../../redux/actions/visibilityFilter"


describe('Test visibilityFilter', () => {
    it('Testing visibilityFilter "SHOW_ALL_SECTIONS"', () => {
        const initialState = 'SHOW_ALL'
        const result = visibilityFilter(initialState, setFilter('SHOW_ALL_SECTIONS'))

        expect(result).toBe('SHOW_ALL_SECTIONS')
    })

    it('Testing visibilityFilter "SHOW_COMPLETED_SECTIONS"', () => {
        const initialState = 'SHOW_ALL'
        const result = visibilityFilter(initialState, setFilter('SHOW_COMPLETED_SECTIONS'))

        expect(result).toBe('SHOW_COMPLETED_SECTIONS')
    })

    it('Testing visibilityFilter "SHOW_COMPLETED"', () => {
        const initialState = 'SHOW_ALL'
        const result = visibilityFilter(initialState, setFilter('SHOW_COMPLETED'))

        expect(result).toBe('SHOW_COMPLETED')
    })

    it('Testing visibilityFilter "SHOW_UNCOMPLETED"', () => {
        const initialState = 'SHOW_ALL'
        const result = visibilityFilter(initialState, setFilter('SHOW_UNCOMPLETED'))

        expect(result).toBe('SHOW_UNCOMPLETED')
    })
})