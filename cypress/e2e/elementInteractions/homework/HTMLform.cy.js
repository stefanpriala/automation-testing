/// <reference types="Cypress" />

describe('HTML Form example', () =>{
    
    beforeEach(()=>{

       cy.visit("https://testpages.herokuapp.com/styled/basic-html-form-test.html")

       cy.get('table').should('be.visible')

       //filling the form
          
       cy.get('[name="username"]')
         .should('be.visible')
         .type('reus99')

       cy.get('[name="password"]')
         .should('be.visible')
         .type('Password1!')

       cy.get('[name="comments"]')
         .should('be.visible')
         .clear()
         .type('this is a new comment')

       cy.get('[value=cb3]')
         .should('be.visible')
         .uncheck()

       cy.get('[value="cb1"]')
         .should('be.visible')
         .check()

       cy.get('[value="rd1"]')
         .should('be.visible')
         .check()
         .should('be.checked')

       cy.get('[multiple="multiple"]')
         .should('be.visible')
         .select([0,1])

       cy.get('[name="dropdown"]')
         .should('be.visible')
         .select('Drop Down Item 5')

       cy.get('[name="hiddenField"]')
         .invoke('show', {force: true})
         .type('{selectall}{backspace} just an example',{force: true})

          // assertions for filled forms/checkboxes, etc.

        cy.get('[name="username"]')
         .should('be.visible')
         .and('have.value','reus99')

       cy.get('[name="password"]')
         .should('be.visible')
         .and('not.have.value',':empty')

       cy.get('[name="comments"]')
         .should('be.visible')
         .and('have.value','this is a new comment')

       cy.get('[value=cb3]')
         .should('be.visible')
         .and('not.be.checked')

       cy.get('[value="cb1"]')
         .should('be.visible') 
         .and('be.checked')

       cy.get('[name="hiddenField"]')
         .invoke('val')
         .should('contain', 'just an example')

       cy.get('select[multiple="multiple"]')
         .select([0,1])
         .find('option:selected')
         .should(($options)=>{
            expect($options).to.have.length(2);
            expect($options.eq(0)).to.have.value('ms1');
            expect($options.eq(1)).to.have.value('ms2');
         })
      
       cy.get('[name="dropdown"]')
         .should('be.visible')
         .should('contain','Drop Down Item 5')
         .and('have.value','dd5')

    })

    it('fill and successfully reach the confirmation screen', ()=>{

        //submitting the form

       cy.get('[value="submit"]')
         .should('be.visible')
         .click()

    //validating redireciton
       cy.url()
         .should('include','/styled/the_form_processor.php')

        

    // checking that data submitted is visible on the page

       cy.get('#_valueusername')
         .should('be.visible')
         .and('contain','reus99')

       cy.get('#_valuepassword')
         .should('be.visible')
         .and('contain','Password1!') 
        
       cy.get('#_valuecomments')
         .should('be.visible')
         .and('contain','this is a new comment') 

       cy.get('#_valuehiddenField')
         .should('be.visible')
         .and('contain','just an example') 

       cy.get('#_valuecheckboxes0')
         .should('be.visible')
         .and('contain','cb1')    

       cy.get('#_valuemultipleselect0')
         .should('be.visible')
         .and('contain','ms1')

       cy.get('#_valuemultipleselect1')
         .should('be.visible')
         .and('contain','ms2')

       cy.get('#_valuedropdown')
         .should('be.visible')
         .and('contain','dd5')

         //back to form

       cy.get('#back_to_form')
         .should('be.visible')
         .click()  

      //second redirection check

       cy.url()
         .should('include','basic-html-form-test.html')

    })

    it('clears filled in data from the form when choosing to cancel', ()=>{

         // clicking on the cancel button

       cy.get('[value="cancel"]') 
         .should('be.visible')
         .click()
       
       cy.get('[name="username"]')
         .invoke('val')
         .should('be.empty')

       cy.get('[name="password"]')
         .invoke('val')
         .should('be.empty') 

       cy.get('[name="comments"]')
         .should('be.visible')
         .and('have.value','Comments...')

       cy.get('[value=cb3]')
         .should('be.visible')
         .and('be.checked')

       cy.get('[value="rd2"]')
         .should('be.visible')
         .check()
         .should('be.checked')

       cy.get('select[multiple="multiple"]')
         .find('option[selected]')
         .should(($options)=>{
            expect($options).to.have.length(1);
            expect($options.eq(0)).to.have.text('\n                            Selection Item 4\n                        ');
         })

       cy.get('[name="dropdown"]')
         .should('be.visible')
         .should('contain','Drop Down Item 3')
         .and('have.value','dd3')


    })

})