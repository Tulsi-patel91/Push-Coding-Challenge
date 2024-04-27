class verifyCandidateDetails{

    verifyCandidateNameTxt = ".oxd-table-body>div:nth-child(1) >div >div:nth-child(3)"
    eyeBtnTxt = ".oxd-table-body>div:nth-child(1) >div >div:nth-child(7)>div>button:first-child"
    firstNameTxt = "input[name='firstName']"
    middleNameTxt = "input[name='middleName']"
    lastNameTxt = "input[name='lastName']"
    vacancyTxt = ".oxd-select-text-input"
    emailTxt = "div:nth-of-type(3) > .orangehrm-full-width-grid.oxd-grid-3 > div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input"
    contactNumberTxt = ".oxd-form .oxd-grid-item--gutters:nth-of-type(2) [placeholder='Type here']"
    resumeTxt = ".orangehrm-file-preview>p"
    keywordsTxt = "div.oxd-layout div.oxd-layout-container div.oxd-layout-context div.orangehrm-background-container div.orangehrm-card-container form.oxd-form div.oxd-form-row:nth-child(7) div.oxd-grid-3.orangehrm-full-width-grid div.oxd-grid-item.oxd-grid-item--gutters.orangehrm-save-candidate-page.--span-column-2:nth-child(1) div.oxd-input-group.oxd-input-field-bottom-space div:nth-child(2) > input.oxd-input.oxd-input--active"
    notesTxt = ".oxd-textarea.oxd-textarea--resize-vertical"
    deleteBtnTxt = ".oxd-table-body>div:first-child >div >div:nth-child(7)>div>button:nth-child(2)"
    confirmDeleteTxt = ".orangehrm-modal-footer>button:last-child"


    verifyCandidateName(firstName,middleName,lastName){
        cy.get(this.verifyCandidateNameTxt).scrollIntoView()
        cy.get(this.verifyCandidateNameTxt).should('be.visible').should('contain.text',firstName+" "+middleName+" "+lastName)
        cy.log("User verified candidate's name "+firstName+" "+middleName+" "+lastName)
        cy.addContext("User verified candidate's name "+firstName+" "+middleName+" "+lastName)
    }

    clickEyeBtn(){
        cy.get(this.eyeBtnTxt).should('be.visible').click()
        cy.wait(2000)
        cy.log("User clicked on eye button")
        cy.addContext("User clicked on eye button")
    }

    verifyFirstName(firstName){ 
        cy.get(this.firstNameTxt).should('be.disabled')       
        cy.get(this.firstNameTxt).should('have.value',firstName)
        cy.log("User verfied candidate's first Name --> "+firstName)
        cy.addContext("User verfied candidate's first Name --> "+firstName)
    }

    verifyMiddleName(middleName){
        cy.get(this.middleNameTxt).should('be.disabled')
        cy.get(this.middleNameTxt).should('have.value',middleName)
        cy.log("User verfied candidate's middle Name --> "+middleName)
        cy.addContext("User verfied candidate's middle Name --> "+middleName)
    }

    verifyLastName(lastName){
        cy.get(this.lastNameTxt).should('be.disabled')
        cy.get(this.lastNameTxt).should('have.value',lastName)
        cy.log("User verfied candidate's last Name --> "+lastName)
        cy.addContext("User verfied candidate's last Name --> "+lastName)
    }

    verifyVacancy(vacancy){
        cy.get(this.vacancyTxt).should('be.visible')
        cy.get(this.vacancyTxt).should('have.text',vacancy)
        cy.log("User verfied candidate's vacancy --> "+vacancy)
        cy.addContext("User verfied candidate's vacancy --> "+vacancy)
    }

    verifyEmailId(emailId){
        cy.get(this.emailTxt).should('be.disabled')
        cy.get(this.emailTxt).should('have.value',emailId)
        cy.log("User verfied candidate's emailId --> "+emailId)
        cy.addContext("User verfied candidate's emailId --> "+emailId)
    }

    verifyContactNumber(contactNumber){
        cy.get(this.contactNumberTxt).should('be.disabled')
        cy.get(this.contactNumberTxt).should('have.value',contactNumber)
        cy.log("User verfied candidate's Contact number --> "+contactNumber)
        cy.addContext("User verfied candidate's Contact number --> "+contactNumber)
    }

    verifyResumeName(fileName){
        cy.get(this.resumeTxt).scrollIntoView()
        cy.get(this.resumeTxt).should('be.visible')
        cy.get(this.resumeTxt).should('contain.text',fileName)
        cy.log("User verfied candidate's resume file name --> "+fileName)
        cy.addContext("User verfied candidate's resume file name --> "+fileName)
    }

    verifyKeywords(keywords){
        cy.get(this.keywordsTxt).should('be.disabled')
        cy.get(this.keywordsTxt).should('have.value',keywords)
        cy.log("User verfied candidate's keywords --> "+keywords)
        cy.addContext("User verfied candidate's keywords --> "+keywords)
    }

    verifyNotes(notes){
        cy.get(this.notesTxt).should('be.disabled')
        cy.get(this.notesTxt).should('have.value',notes)
        cy.log("User verfied candidate's notes --> "+notes)
        cy.addContext("User verfied candidate's notes --> "+notes)
    }

    clickDeleteBtn(){
        cy.get(this.deleteBtnTxt).should('be.visible').click()
        cy.log("User clicked on delete button")
        cy.addContext("User clicked on delete button")
    }

    clickConfirmBtn(){
        cy.get(this.confirmDeleteTxt).should('be.visible').click()
        cy.log("Candidate's profile is successfully deleted")
        cy.addContext("Candidate's profile is successfully deleted")
    }
}

export default verifyCandidateDetails