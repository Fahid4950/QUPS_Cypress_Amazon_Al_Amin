context('Amazon Automatio',() =>{

    it('gift_cards ', () =>{
        cy.visit('https://www.amazon.com/s?i=merchant-items&me=A3V0BPV3DNW6U4')
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email').type('fahid484950@gmail.com')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('bappaandarica')
        cy.get('#signInSubmit').click()
        //cy.get('#ap-account-fixup-phone-skip-link').click()
        cy.get('[href="/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc"]').click()
    })

})