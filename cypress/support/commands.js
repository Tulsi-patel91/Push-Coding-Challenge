// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress" />


import loginPage from "../PageObjects/loginPage";
import addContext from 'mochawesome/addContext'
const lp = new loginPage()
Cypress.Commands.add('Login',(username,password,expectedText)=>{
lp.setUserName(username)
cy.log("User entered user name")
cy.addContext("User entered user name")
lp.setPassword(password)
cy.log("User entered password")
cy.addContext("User entered password")
lp.clickLoginBtn()
cy.log("User clicked on Login button")
cy.addContext("User clicked on Login button")
lp.verifyDashboardTxt(expectedText)
cy.log("User successfully Logged in")
cy.addContext("User successfully Logged in")
})

Cypress.Commands.add('addContext', (context)=>{
    cy.once('test:after:run', (test) => addContext({ test }, context))

})

Cypress.Commands.add('LogOut', () => {
    lp.clickUserProfile()
    cy.get(lp.logOutTxt).should('be.visible').click()
    cy.log("User clicked on Log out")
    cy.addContext("User clicked on Log out")
})
