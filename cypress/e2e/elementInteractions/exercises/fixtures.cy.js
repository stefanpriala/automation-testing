/// <reference types="Cypress" />

describe('fixtures', () =>{

    it.only("first test", () =>{
 
             cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

             cy.fixture('orangehrm.json').then((data)=>{
                cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username);
                cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password); 
                cy.get('.oxd-button').click();
                cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                  .should('have.text', data.expected);})
                   
        })  



        let userdata;
        before( ()=>{
        cy.fixture("orangehrm").then((data)=>{
        userdata=data;
        })
    
    
        
        it('Fixtures DemoTest', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("input[placeholder='Username']").type(userdata.username); cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button [type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module") .should('have.text', userdata.expected);
        })
    })

})

 