/// <reference types="cypress" />

it('account creation test', function() {

    // Open main web site
    cy.visit('https://www.etsy.com')
 
    // Click On SignIn Button
    cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(1)').click()
 
   // Click On Register 
   cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(1) > div > button').click()

    cy.wait(9000)

    // Provide email address
   cy.get('#join_neu_email_field').type('immtwo@gmail.com')
   
//    Provide first name
   cy.get('#join_neu_first_name_field').type('imranone')

// Provide password
   cy.get('#join_neu_password_field').type('test1234')

    cy.wait(9000)

    // Click on Register button
   cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(9) > div > button').click()

    cy.wait(5000)

//    Verify account is created by checking welcome message
   cy.get('.welcome-message-text').contains('Welcome to Etsy')
   
  

    })
