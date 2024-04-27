class loginPage{

userNameTxt = "input[name='username']"
passwordTxt = "input[name='password']"
loginBtn = "button[type='submit']"
verifyLoginTxt = ".oxd-topbar-header-breadcrumb > h6"
invalidCredentialTxt = ".oxd-alert-content-text.oxd-text.oxd-text--p"
userDropDownTxt = ".bi-caret-down-fill.oxd-icon.oxd-userdropdown-icon"
logOutTxt = "li:nth-of-type(4) > a[role='menuitem']"



setUserName(username){
    cy.get(this.userNameTxt).should('be.visible')
    cy.get(this.userNameTxt).type(username).should('have.value',username)
    cy.log("User entered username ---> "+username)
    cy.addContext("User entered username ---> "+username)

}

setPassword(password){
    cy.get(this.passwordTxt).should('be.visible')
    cy.get(this.passwordTxt).type(password).should('have.value',password)
    cy.log("User entered password ---> "+password)
    cy.addContext("User entered password ---> "+password)
}

clickLoginBtn(){
    cy.get(this.loginBtn).should('be.visible')
    cy.get(this.loginBtn).click()
    cy.log("User clicked on login button")
    cy.addContext("User clicked on login button")
}

verifyDashboardTxt(expectedText){
    cy.get(this.verifyLoginTxt).should('be.visible').should('have.text',expectedText)
    cy.log("User navigated to home page and validate "+expectedText+" text")
    cy.addContext("User navigated to home page and validate "+expectedText+" text")
}

verifyInvalidCredentialTxt(expectedText){
    cy.get(this.invalidCredentialTxt).should('be.visible').should('have.text',expectedText)
    cy.log("User validate "+expectedText+" error message")
    cy.addContext("User validate "+expectedText+" error message")
}

clickUserProfile(){
    cy.get(this.userDropDownTxt).should('be.visible').click()
    cy.log("User click on user profile")
    cy.addContext("User click on user profile")
    cy.wait(2000)
}


}

export default loginPage