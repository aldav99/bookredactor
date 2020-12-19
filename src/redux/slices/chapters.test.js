import chaptersReducer, { fetchChapters, uploadChapters, toggleChapterReq, addNumberOfSections, addNumberOfCompletedSections, subtractNumberOfCompletedSections } from "./chapters"

describe('Test ChapterReducer', () => {
    it('Testing fetchChapters.pending', () => {
        const initialState = { isLoading: true, entries: [] }
        const result = chaptersReducer(initialState, { type: fetchChapters.pending })

        expect(result.isLoading).toBeTruthy()
    })

    it('Testing fetchChapters.fulfilled', () => {
        const initialState = { isLoading: false, entries: [] }
        const result = chaptersReducer(initialState, { type: fetchChapters.fulfilled, payload: [{ text: 'Test' }] })


        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
    })

    it('Testing uploadChapters', () => {
        const initialState = { isLoading: false, entries: [] }
        const result = chaptersReducer(initialState, { type: uploadChapters.fulfilled, payload: { text: 'Test', completed: false } })

        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
        expect(result.entries[0].completed).toBeFalsy()

    })

    it('Testing toggleChapterReq.fulfilled', () => {
        const initialState = { isLoading: false, entries: [{ _id: 1, text: 'Test', completed: false }] }
        const result = chaptersReducer(initialState, { type: toggleChapterReq.fulfilled, payload: { _id: 1, completed: !initialState.entries[0].completed } })
        console.log(result)

        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
        expect(result.entries[0].completed).toBeTruthy()
    })

    it('Testing addNumberOfSections.fulfilled', () => {
        const initialState = {
            isLoading: false, entries: [{
                _id: 1, text: 'Test', completed: false, numberOfSections: 0,
                numberOfCompletedSections: 0
            }]
        }
        const result = chaptersReducer(initialState, { type: addNumberOfSections.fulfilled, payload: { _id: 1, numberOfSections: initialState.entries[0].numberOfSections + 1 } })

        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
        expect(result.entries[0].numberOfSections).toBe(1)
    })

    it('Testing addNumberOfCompletedSections.fulfilled', () => {
        const initialState = {
            isLoading: false, entries: [{
                _id: 1, text: 'Test', completed: false, numberOfSections: 1,
                numberOfCompletedSections: 0
            }]
        }
        const result = chaptersReducer(initialState, { type: addNumberOfCompletedSections.fulfilled, payload: { _id: 1, numberOfCompletedSections: initialState.entries[0].numberOfCompletedSections + 1 } })

        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
        expect(result.entries[0].numberOfCompletedSections).toBe(1)
    })

    it('Testing subtractNumberOfCompletedSections.fulfilled', () => {
        const initialState = {
            isLoading: false, entries: [{
                _id: 1, text: 'Test', completed: false, numberOfSections: 1,
                numberOfCompletedSections: 1
            }]
        }
        const result = chaptersReducer(initialState, { type: subtractNumberOfCompletedSections.fulfilled, payload: { _id: 1, numberOfCompletedSections: initialState.entries[0].numberOfCompletedSections - 1 } })

        expect(result.isLoading).toBeFalsy()
        expect(result.entries[0].text).toBe('Test')
        expect(result.entries[0].numberOfCompletedSections).toBe(0)
    })
})