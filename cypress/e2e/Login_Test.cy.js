//import { forEach } from "cypress/types/lodash"
Cypress.on('uncaught:exception',(err,Runnable)=>{
    return false
})

import { Runnable } from "mocha"
import loginPage from "../PageObjects/loginPage"

describe('Login Test',()=>{
const LoginPage = new loginPage()
it('Validating Login Feature',()=>{

    cy.fixture("LoginTestData").then((data)=>{
        cy.visit('/login')

        data.forEach((testData)=>{
            LoginPage.setUserName(testData.userName)
            LoginPage.setPassword(testData.password)
            LoginPage.clickLoginBtn()

            if((testData.userName=="Admin") && (testData.password=="admin123")){
                LoginPage.verifyDashboardTxt(testData.expectedText)
                cy.LogOut()
            }else{
                LoginPage.verifyInvalidCredentialTxt(testData.expectedText)
            }

        })
        
    })

})



  


    

})

