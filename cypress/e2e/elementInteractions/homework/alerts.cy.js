/// <reference types="Cypress" />


describe('Alert Examples', () =>{

    beforeEach(()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

    })
    
    // javascript alert
    it('Verifies window alert box when button is clicked', ()=>{
        
        cy.get('#alertexamples').click()
    
        cy.on('window:alert',(t)=>{
    
           expect(t).to.equal('I am an alert box!')

        })
    
    })

    //js alert confirm
    it('Verifies window confirm box when button is clicked', ()=>{

        cy.get('#confirmexample').click()

        cy.on('window:confirm',(t)=>{

           expect(t).to.equal('I am a confirm alert')

    })
    //close by pressing on ok - default
        cy.get('#confirmexplanation').should('have.text','You clicked OK, confirm returned true.')
})

    //close by pressing on cancel
    it('Verifies confirmation message when window confirm box alert is cancelled', ()=>{

        cy.get('#confirmexample').click()

        cy.on('window:confirm',(t)=>{

           expect(t).to.equal('I am a confirm alert')
    })

        cy.on('window:confirm',()=> false) // close alert by clicking on cancel
        cy.get('#confirmexplanation').should('have.text','You clicked Cancel, confirm returned false.')
    })

})