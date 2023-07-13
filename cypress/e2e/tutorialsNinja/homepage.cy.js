
describe('visit site and check if the correct url and name displayed', ()=>
{
it.only('tc2', function()
{
    cy.visit("http://tutorialsninja.com/demo/index.php?route=common/home")
    cy.url().should('include', '/home')
    cy.title().should('eq','Your Store')
    cy.get('.input-group').should('be.visible')
    
})
})