/// <reference types="cypress" />

// This script is to verify mandatory fields during registration

it('mandatory fields test', function() {

    // Open main web site
    cy.visit('https://www.etsy.com')
 
    // Click On SignIn Button
    cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(1)').click()
 
   // Click On Register 
   cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(1) > div > button').click()

    cy.wait(9000)

 
    // Click on Register button
   cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(9) > div > button').click()

    cy.wait(5000)

   // Verify mandatory message 

   cy.get('#aria-join_neu_email_field-error').contains('Email can/\'t be blank.')
  
   cy.get('aria-join_neu_first_name_field-error').contains('First name can/\'t be blank.')
     
   cy.get('aria-join_neu_password_field-error').contains('Password can/\'t be blank.')
  

    })
