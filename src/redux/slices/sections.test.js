import sectionsReducer, { fetchSections, uploadSection, toggleSectionReq } from "./sections"

describe('Test sectionsReducer', () => {
    it('Testing fetchSections.pending', () => {
        const initialState = { isLoading: true, entries: [] }
        const result = sectionsReducer(initialState, { type: fetchSections.pending })

        expect(result.isLoading).toBeTruthy()
    })

    it('Testing fetchSections.fulfilled', () => {
        const initialState = { isLoading: false, entries: [] }
        const result = sectionsReducer(initialState, { type: fetchSections.fulfilled, payload: [{ text: 'Test' }] })


        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
    })

    it('Testing uploadSection', () => {
        const initialState = { isLoading: false, entries: [] }
        const result = sectionsReducer(initialState, { type: uploadSection.fulfilled, payload: { text: 'Test', completed: false } })

        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
        expect(result.entries[0].completed).toBeFalsy()

    })

    it('Testing toggleSectionReq.fulfilled', () => {
        const initialState = { isLoading: false, entries: [{ _id: 1, text: 'Test', completed: false }] }
        const result = sectionsReducer(initialState, { type: toggleSectionReq.fulfilled, payload: { _id: 1, completed: !initialState.entries[0].completed } })

        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
        expect(result.entries[0].completed).toBeTruthy()
    })
})