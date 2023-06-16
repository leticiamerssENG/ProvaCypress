/// <reference types="cypress"/>

describe("Criando cenário de teste para o site AltoroMutual (DemoTestFire)", ()=>{ 

  it('Caso de teste: Realizando login com falha', ()=>{

    login_try()   
    cy.get('#_ctl0__ctl0_Content_Main_message').should('contain.text', 'Login Failed')

  }) 

  it("Caso de teste: Testando botão-link 'SMALL BUSINESS' ", ()=>{ 

    cy.visit('http://demo.testfire.net/login.jsp')
    cy.get('#LinkHeader3').click()
    cy.get('h1').should('contain.text', 'Small Business') 

  }) 

  it("Caso de teste: Testando botão-link 'PERSONAL' ", ()=>{ 

    cy.visit('http://demo.testfire.net/login.jsp')
    cy.get('#LinkHeader2').click()
    cy.get('h1').should('contain.text', 'Personal') 

  }) 

  it("Caso de teste: Testando botão-link 'INSIDE ALTORO MUTUAL' ", ()=>{ 

    cy.visit('http://demo.testfire.net/login.jsp')
    cy.get('#LinkHeader4').click()
    cy.get('h1').should('contain.text', 'Inside Altoro') 

  }) 
  
})

function login_try(){
  
  cy.visit('http://demo.testfire.net/login.jsp')
  cy.get('#uid').type('teste')
  cy.get('#passw').type('123456')
  cy.get(':nth-child(3) > :nth-child(2) > input').click() 

}