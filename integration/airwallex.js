context('ConsoleUIAuto', () => {


	before(() => {
        cy.visit('en-AU/');
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

	it('log in button', () => {
        cy.get('.css-1zji33 a').should('be.visible');
    });
	

	it('log in click', () => {
        cy.get('.css-1zji33 a').click();
    });

	it('email button', () => {
        cy.get('#email').should('has.***', '输入登录邮箱');
    });

	it('email type', () => {
        cy.get('#email').type('testing+ad@airwallex.com');
    });	

	it('passwd button', () => {
        cy.get('#email').should('has.***', '输入密码');
    });

	it('passwd type', () => {
        cy.get('#email').type('Abcde1234');
    });	

	it('login button', () => {
        cy.get('*loginForm* submit');
    });
	
	it('login click', () => {
        cy.get('*loginForm* submit').click();
    });

	
})