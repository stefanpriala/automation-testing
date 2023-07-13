/// <reference types="Cypress" />

describe('assertions demo', () =>{

  
    it.skip("implicit assertions", () =>{
 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
        cy.url().should('include','orangehrmlive.com')
                .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('not.contain','orangehrm1')



        cy.title().should('include','Orange')
                  .and('eq',"OrangeHRM");

        cy.get('.orangehrm-login-branding > img').should('exist') // 'be.visible'
        

        cy.xpath("//a").should('have.length','5')


        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value','Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        cy.get('.oxd-button').click()

    })

    it("explicit assertions", () =>{
 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()

        let expName="xyz";


        cy.get('.oxd-userdropdown-name').then((x)=>{
            
            let actName=x.text()

            expect(actName).to.not.equal(expName)

            //TDD style
            assert.notEqual(actName,expName)
        })


    })



})
