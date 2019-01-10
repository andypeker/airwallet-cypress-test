context('ConsoleUIAuto', () => {


	before(() => {
        cy.visit('/');
        cy.wait(3000)
		
		
	})
	
	after(() => {
    	cy.log("all Test have finished !")
    })

    beforeEach(() => {
    	cy.log("one test will start")
    })

    afterEach(() => {
    	cy.log("one test will end")
    })

	it('搜索输入框', () => {
        cy.get('#kw').should('be.empty');
    });
	
	it('输入框typing', () => {
        cy.get('#kw').type('Franklin Yang');
    });
	
	it('搜索', () => {
        cy.get('#su').click();
    });
	
})