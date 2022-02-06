/// <reference types="cypress" />

// This script is to verify account creation

it('product management test', function() {

    // Open main web site
    cy.visit('https://www.etsy.com')
 
    // Click On SignIn Button from nav
    cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(1)').click()
 
    cy.wait(9000)

     // Provide email address
     cy.get('#join_neu_email_field').type('imfive@gmail.com')
   
    
     // Provide password
        cy.get('#join_neu_password_field').type('test1234')
     
         cy.wait(9000)
      

   // Click On SignOn Button 
   cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(10) > div > button').click()



    cy.wait(9000)

    // Provide email address
    cy.wait(5000)

//    Verify account is created by checking welcome message
   cy.get('.welcome-message-text').contains('Welcome')
  
   // Search for masks and press enter
  cy.get('#global-enhancements-search-query').type('masks{enter}')

  cy.get('.wt-text-caption').contains('FACE MASKS Bulk Large Order of 10000 pieces Black Reusable Washable').click() 

  // Click on AddToBasket button
  cy.get('button.wt-btn.wt-btn--filled wt-width-full').click()


  // Remove product
  cy.get('("span.wt-btn.wt-btn--transparent.wt-btn--small")[1]').click()
  
  // Verify Your basket is empty message
  cy.get('#checkout > div.wt-position-relative > div.wt-mb-xs-6.wt-mt-xs-4.wt-mt-xs-1.wt-position-relative > div > h1').contains('Your basket is empty.')


    })
