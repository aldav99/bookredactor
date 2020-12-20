describe('Test bookredactor', () => {
    it('Visit to mainpage', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Bookredactor')
        cy.contains('s4')
        cy.contains('View').click()
        cy.url().should('include', '5fab3f4540e91b690000072f')
        cy.contains('ch1')
        cy.contains('s4').should('not.exist')
        cy.visit('http://localhost:3000/')
        cy.get('[aria-label="section-input"]').type('Second').should('have.value', 'Second')
        cy.contains(/Add section/i).click()
        cy.get('[aria-label="section-input"]').should('have.value', '')
        cy.get('[aria-label="Count chapters"]').contains(/1/i)
        cy.get('[aria-label="Count sections"]').contains(/2/i)
        cy.get('[aria-label="Count completed sections"]').contains(/1/i)
        cy.get('[aria-label="Percent"]').contains(/50/i)
        cy.contains('s4').click()

        cy.get('[aria-label="Count completed sections"]').contains(/2/i)
        cy.get('[aria-label="Percent"]').contains(/100/i)
        cy.get('[aria-label="5fb0d534b981b550000011c5"]').should('be.checked')
        cy.contains('s4').click()
        cy.get('[aria-label="5fb0d534b981b550000011c5"]').should('not.be.checked')
        cy.get('[aria-label="chapter-input"]').type('Chapter2').should('have.value', 'Chapter2')

        cy.contains(/Add chapter/i).click()
        cy.get('[aria-label="chapter-input"]').should('have.value', '')
        cy.get('[aria-label="Count chapters"]').contains(/2/i)
        cy.contains('Chapter2')

        cy.get('[aria-label="5fab3f"]').should('not.be.checked')
        // cy.contains('Chapter2').click()
        // cy.get('[aria-label="5fab3f"]').should('not.be.checked')
        cy.contains(/undo/i).click()
        cy.contains('Chapter2').should('not.exist')
        cy.get('[aria-label="Count chapters"]').contains(/1/i)

        cy.get('[aria-label="chapter-input"]').type('Chapter2').should('have.value', 'Chapter2')

        cy.contains(/Add chapter/i).click()

        cy.contains('Second').click()
        cy.contains('ch1').click()

        cy.contains(/show compl/i).click()
        cy.contains('ch1')
        cy.contains('Chapter2').should('not.exist')

        cy.contains(/show uncompl/i).click()
        cy.contains('Chapter2')
        cy.contains('ch1').should('not.exist')

        cy.contains(/show all/i).click()
        cy.contains('Chapter2')
        cy.contains('ch1')

        cy.contains(/Show Completed SECTIONS/i).click()
        cy.contains('s4')
        cy.contains('Second').should('not.exist')

        cy.contains(/Show UnCompleted SECTIONS/i).click()
        cy.contains('Second')
        cy.contains('s4').should('not.exist')

        cy.contains(/Show All SECTIONS/i).click()
        cy.contains('s4')
        cy.contains('Second')
    })
})