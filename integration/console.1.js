
context('ConsoleUIAuto', () => {
//	scp cypress/integration/frankie/console.1.js xh@frankie:/home/xh/cypress/integration/frankie/

	//	cypress.json :   


  	before(() => {        // 进入测试页面
        // cy.visit('https://10.19.140.200:29220/');
        cy.visit('/');
        cy.wait(3000)

        // cy.fixture('userpasswd.json').as('userData')
        // cy.log('@userData')
        cy.fixture('userpasswd.json').should((logdata) => {
            expect(logdata[0].username).to.exist
            expect(logdata[0].password).to.exist
        })
        
        // cy.tick(2000)
        cy.setCookie("KEYCLOAK_LOCALE", "en")
        cy.setCookie("AUTH_SESSION_ID", "b1a1f836-f259-4173-b6b9-cab31e00a58a.keycloak-9b7ff8dc4-nt9fx")
        cy.setCookie("KC_RESTART", "eyJhbGciOiJIUzI1NiIsImtpZCIgOiAiMDZiNGM1ZDAtYmFlNi00ZmYyLTg4NmUtZDkzOGY3NTY1Zjk3In0.eyJjaWQiOiJjb25zb2xlLWl0ZyIsInB0eSI6Im9wZW5pZC1jb25uZWN0IiwicnVyaSI6Imh0dHA6Ly8xMC4xOS4xNDAuMjAwOjI5MjIwLyMvY29uc29sZS9uYW1lc3BhY2UtbGlzdD9yZWRpcmVjdD1hcHAiLCJhY3QiOiJBVVRIRU5USUNBVEUiLCJub3RlcyI6eyJzY29wZSI6Im9wZW5pZCIsImlzcyI6Imh0dHA6Ly8xMC4xOS4xNDAuMjAwOjI5MjcxL2F1dGgvcmVhbG1zL2NvbnNvbGUtc3NvIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJjb2RlX2NoYWxsZW5nZV9tZXRob2QiOiJwbGFpbiIsInJlZGlyZWN0X3VyaSI6Imh0dHA6Ly8xMC4xOS4xNDAuMjAwOjI5MjIwLyMvY29uc29sZS9uYW1lc3BhY2UtbGlzdD9yZWRpcmVjdD1hcHAiLCJzdGF0ZSI6IjIyZDBjMDA5LWI4MDYtNDk3OS04MDQxLTc0NzgwNjlmYzM5YiIsIm5vbmNlIjoiZWE1MzRiMzYtMGJkMS00OTE5LTk0MmYtMjRhMTZiNzYyNDUyIiwicmVzcG9uc2VfbW9kZSI6ImZyYWdtZW50In19.G6Bc6OIsDkQzjm9tT6aNQ8DryxhQfxkpV-Xuw2q11SQ")
        cy.setCookie("JSESSIONID", "34370E54714673F2B34F08479802B5BF.keycloak-9b7ff8dc4-nt9fx")
		cy.setCookie("JSESSIONID", "B48919CC1D4DCB854DCC4D05B452351C")

    });

    /**
KEYCLOAK_LOCALE=en; 
AUTH_SESSION_ID=b1a1f836-f259-4173-b6b9-cab31e00a58a.keycloak-9b7ff8dc4-nt9fx; 
KC_RESTART=; 
JSESSIONID=34370E54714673F2B34F08479802B5BF.keycloak-9b7ff8dc4-nt9fx; 
JSESSIONID=B48919CC1D4DCB854DCC4D05B452351C
    */

    after(() => {
    	cy.log("all Test have finished !")
    })

    beforeEach(() => {
    	cy.log("one test will start")
    })

    afterEach(() => {
    	cy.log("one test will end")
    })


    it('跳转到登录页面', () => {
        cy.get('#kc-login').exited;
    });

	it('切换中文5', () => {
		//	#kc-locale-wrapper

        // cy.get('#kc-current-locale-link').click();
        // cy.get('#kc-locale-dropdown').get('ul li:second').click()

        //	action like as follow will occur error in js and page, so ingore !
        // cy.get('#kc-locale-dropdown').find('ul li').contains('中文简体').click({force: true})

		// cy.get('#kc-locale').trigger('mouseover').contains('中文简体').click()
		// cy.get('#kc-locale-wrapper').trigger('mouseenter').contains('中文简体').click()

		//	kc-current-locale-link
		// cy.get('#kc-locale-dropdown').trigger('mouseover').contains('中文简体').click()
		// cy.get('#kc-current-locale-link').trigger('mouseover').contains('中文简体').click()

		//	ok
		// cy.get('#kc-locale-dropdown ul').then($el=>{
  //           cy.wrap($el).invoke('show')
  //           cy.wait(500)
  //           cy.wrap($el).contains('中文简体').click()
  //       })

		//	errer in js
		// cy.get('#kc-locale-dropdown ul').invoke('show').contains('中文简体').click()
    });

    it('有没有 username 输入框', () => {
        cy.get('#username').should('be.empty');
    }); 

    it('有没有 password 输入框', () => {
        cy.get('#password').should('be.empty');
    }); 

    // it('fixture username password', () => {
    // 	cy.log(userData.username + userData.password)
    // })
    
	// it('输入 username', () => {
 //        cy.get('#username')
 //        .type('frankietest1')
 //        .should('have.value', 'frankietest1');
 //    });
	it('输入 username', () => {
        cy.get('#username')
        .type(this.userData.username)
    });

	// it('输入 password', () => {
 //        cy.get('#password')
 //        .type('He123123.')
 //        .should('have.value', 'He123123.');
 //    });

	it('输入 password', () => {
        cy.get('#password')
        .type(this.userData.password)
    });

    // it('代理本地请求并修改成任意数据', () => {
    //     cy.server();        // 拦截/api/user请求并传入自定义数据
    //     cy.route('/api/user', {user: 'frank'}).as('user');
    //     cy.visit('/');
    // });
    
    // it('代理本地请求并使用mock数据', () => {
    //     cy.server();        // 请求本地 cypress/fixtrues/user.json文件（需要先创建） then方法可修改成任意数据，若不需要修改可不写
    //     cy.fixture('/user.json').then(data => data).as('fix_user');        // 拦截/api/user请求并传入mock数据
    //     cy.route('/api/user', '@fix_user').as('user');
    //     cy.visit('/');
    // });
    

    it('获取 Cookie', () => {
        cy.setCookie("KEYCLOAK_LOCALE", "en")
        cy.setCookie("AUTH_SESSION_ID", "b1a1f836-f259-4173-b6b9-cab31e00a58a.keycloak-9b7ff8dc4-nt9fx")
        cy.setCookie("KC_RESTART", "eyJhbGciOiJIUzI1NiIsImtpZCIgOiAiMDZiNGM1ZDAtYmFlNi00ZmYyLTg4NmUtZDkzOGY3NTY1Zjk3In0.eyJjaWQiOiJjb25zb2xlLWl0ZyIsInB0eSI6Im9wZW5pZC1jb25uZWN0IiwicnVyaSI6Imh0dHA6Ly8xMC4xOS4xNDAuMjAwOjI5MjIwLyMvY29uc29sZS9uYW1lc3BhY2UtbGlzdD9yZWRpcmVjdD1hcHAiLCJhY3QiOiJBVVRIRU5USUNBVEUiLCJub3RlcyI6eyJzY29wZSI6Im9wZW5pZCIsImlzcyI6Imh0dHA6Ly8xMC4xOS4xNDAuMjAwOjI5MjcxL2F1dGgvcmVhbG1zL2NvbnNvbGUtc3NvIiwicmVzcG9uc2VfdHlwZSI6ImNvZGUiLCJjb2RlX2NoYWxsZW5nZV9tZXRob2QiOiJwbGFpbiIsInJlZGlyZWN0X3VyaSI6Imh0dHA6Ly8xMC4xOS4xNDAuMjAwOjI5MjIwLyMvY29uc29sZS9uYW1lc3BhY2UtbGlzdD9yZWRpcmVjdD1hcHAiLCJzdGF0ZSI6IjIyZDBjMDA5LWI4MDYtNDk3OS04MDQxLTc0NzgwNjlmYzM5YiIsIm5vbmNlIjoiZWE1MzRiMzYtMGJkMS00OTE5LTk0MmYtMjRhMTZiNzYyNDUyIiwicmVzcG9uc2VfbW9kZSI6ImZyYWdtZW50In19.G6Bc6OIsDkQzjm9tT6aNQ8DryxhQfxkpV-Xuw2q11SQ")
        cy.setCookie("JSESSIONID", "34370E54714673F2B34F08479802B5BF.keycloak-9b7ff8dc4-nt9fx")

    	// cy.log(    	cy.getCookie('__cypress.initial')	)
    	cy.getCookies().should('have.length', 4)
    	// cy.getCookies().should('have.length', 4).then((cookies) => {
		  // expect(cookies[0]).to.have.property('KEYCLOAK_LOCALE', 'en')
		  // expect(cookies[1]).to.have.property('AUTH_SESSION_ID', '123ABC')
		  // expect(cookies[2]).to.have.property('KC_RESTART')
		  // expect(cookies[3]).to.have.property('JSESSIONID')
		// })
    })

    it('点击登录事件', () => {
        cy.get('#kc-login').click();
        cy.wait(10000)
        cy.screenshot()
    });

})
