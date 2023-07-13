/// <reference types="Cypress" />


describe('handle alerts', () =>{

// javascript alert
it('js alert', ()=>{

    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    cy.get('#alertexamples').click()

    cy.on('window:alert',(t)=>{

        expect(t).to.contains('I am an alert box!')
    })

})

//js alert confirm
it('js alert', ()=>{

    cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    cy.get('#confirmexample').click()

    cy.on('window:confirm',(t)=>{

        expect(t).to.contains('I am a confirm alert')
    })

    //close by pressing on ok - default
    cy.get('#confirmexplanation').should('have.text','You clicked OK, confirm returned true.')

    


})

    //close by pressing on cancel

 it('js alert', ()=>{

        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
        cy.get('#confirmexample').click()
    
        cy.on('window:confirm',(t)=>{
    
            expect(t).to.contains('I am a confirm alert')
        })
    
        cy.on('window:confirm',()=> false) // close alert by clicking on cancel
        cy.get('#confirmexplanation').should('have.text','You clicked Cancel, confirm returned false.')
        })
    
    it('js prompt alert', ()=>{

            cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
            //
        
            cy.window().then((win)=>{
    
                cy.stub(win,'prompt').returns('welcome')
            })
            cy.get('#promptexample').click()
            cy.get('#promptexplanation').should('have.text','You clicked OK. '+"'prompt'"+' returned welcome')
    
            })


            it.only('js AUTH   alert', ()=>{

                cy.visit("https://authenticationtest.com/HTTPAuth/",{auth:{username: "user", password: "pass"}})
                
                cy.get("div[class='container'] h1").should('have.contain','Login Success')
        
                })       


    })
    
    
    
