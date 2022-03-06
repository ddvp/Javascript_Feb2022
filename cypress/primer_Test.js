/// <reference types="cypress" />

context('Open Test Page', () =>{
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php')
    })

    it('Test Probar pagina', () =>{
        cy.title().should('include', 'My Store')
    })

    it('Test escribir algo en la busqueda', ()=>{
        cy.get('#search_query_top')
        .type('direccion@test.com', { delay: 100}).should('have.value', 'direccion@test.com')
        .clear()
        .type('Dress')
    })
})
