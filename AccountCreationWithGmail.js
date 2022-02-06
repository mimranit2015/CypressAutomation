/// <reference types="cypress" />

// Create account with gmail option

it('account creation with gmail test', function() {

    // Open main web site
    cy.visit('https://www.etsy.com')
 
    // Click On SignIn Button
    cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(1)').click()
 
   // Click On Continue With Google 
   cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(1) > div > button').click()

    cy.wait(9000)

    cy.get('#join-neu-form > div.wt-display-flex-xs.wt-flex-direction-column-xs > div.wt-mb-xs-2 > div > button').click()
 
    })
