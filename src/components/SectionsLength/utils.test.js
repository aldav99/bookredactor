import percentCompletedSections from "./utils"

describe('Test percentCompletedSections', () => {
    it('Testing sectionsLength == 0', () => {
        const result = percentCompletedSections(100, 0)

        expect(result).toBe(0)
    })

    it('Testing sectionsLength !== 0', () => {
        const result = percentCompletedSections(1, 3)

        expect(result).toBe(33)
    })
})