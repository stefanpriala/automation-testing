

describe('test case name', function()
{
it('tc1', ()=>{
    //expect(true).to.equal(true)

    cy.visit("https://opensource-demo.orangehrmlive.com/")
    cy.title().should('eq','OrangeHRM')

})

it('tc2', function()
{
    cy.visit("https://example.cypress.io/")

    cy.contains('type').click()


    cy.url().should('include', '/commands/actions')

    cy.get('.action-email').type('fake@email.com')
    cy.get('.action-email').should('have.value', 'fake@email.com')
})


it.only('padding checking', function()
{
    cy.visit('https://uat-arcus-engage.app-trialscope.com/')

    cy.get('.simple-search-container').then(($searchbar)=>{
        cy.get('.whitespace-pre').then(($text)=>{
            const barBottom = $searchbar[0].getBoundingClientRect().bottom;
            const paragraphTop = $text[0].getBoundingClientRect().top;
            const distance = paragraphTop - barBottom;
            const expectedDistance = 35;
            expect(distance).to.be.closeTo(expectedDistance, 3);
        });
    });
    

})


})
 