/// <reference types="cypress" />

// This script is to verify account creation

before(function()
{
  cy.fixture('example').then(function(data)
  {
      this.data = data
  })
})

it('data driven login', function() {

    // Open main web site
    cy.visit('https://www.etsy.com')
 
    // Click On SignIn Button from nav
    cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(1)').click()
 
    cy.wait(9000)

     // Provide email address
     //cy.get('#join_neu_email_field').type('imfive@gmail.com')
       cy.get('#join_neu_email_field').type(this.data.email)
    
     // Provide password
      //  cy.get('#join_neu_password_field').type('test1234')
        cy.get('#join_neu_password_field').type(this.data.password)

         cy.wait(9000)
      

   // Click On SignOn Button 
   cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(10) > div > button').click()



    cy.wait(9000)

    // Provide email address
    cy.wait(5000)

//    Verify account is created by checking welcome message
   cy.get('.welcome-message-text').contains('Welcome')
  
   // Sign out the user

   cy.get('.wt-menu__trigger__label > .wt-circle').click()
   cy.get(':nth-child(6) > .wt-menu__item > .wt-ml-xs-2').click()

   // Verify logout successfully

   cy.get('.wt-text-display-01').contains('Find things')
 
    })
