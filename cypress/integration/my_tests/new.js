
context('Google Search',() =>{

    it('Google ', () =>{
        cy.visit('http://automationpractice.com/index.php')
       
        cy.get('.login').click()
        cy.get('#email').type('bappa9673@gmail.com')
        cy.get('#passwd').type('bappaandarica')
        cy.get('#SubmitLogin > span').click()
    })

})