describe("hooks and tags", ()=>{

before(()=>{
cy.log("**** launch app ****");
})


after(()=>{
    cy.log("***** close app *****");
})



beforeEach(()=>{
    cy.log("***** login *****");
})

afterEach(()=>{
    cy.log("***** log out *****");
})

it('test case 1', ()=>{
    cy.log("this is tc1")
})

it('test case 2', ()=>{
    cy.log("this is tc2")
})

it('test case 3', ()=>{
    cy.log("this is tc3")
})

it.skip('test case 4', ()=>{
    cy.log("this will be skipped")
})
})