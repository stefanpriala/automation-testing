describe('CSS Locators', () =>{

    it("csslocators", () =>{
        cy.visit("https://magento.softwaretestingboard.com/")

        cy.get("#search").type("tshirts for men")

        cy.get("[title='Search']").click()

        //cy.get(".base").contains("tshirts for men")

        cy.xpath("//ol[@class='products list items product-items']/li").should('have.length', 10)
    })





})