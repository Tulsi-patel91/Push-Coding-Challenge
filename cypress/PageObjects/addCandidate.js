class addCandidate{

    recruitmentTxt = "ul[class='oxd-main-menu'] > li:nth-child(5) > a> span"
    addBtnTxt = ".orangehrm-header-container > button"
    verifyRecruitmentTxt = ".oxd-topbar-header-breadcrumb > h6"
    firstNameTxt = "input[name='firstName']"
    middleNameTxt = "input[name='middleName']"
    lastNameTxt = "input[name='lastName']"
    dropDownTxt = ".oxd-select-text--after"
    emailTxt = "div:nth-of-type(3) > .orangehrm-full-width-grid.oxd-grid-3 > div:nth-of-type(1) > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input"
    contactNumberTxt = ".oxd-form .oxd-grid-item--gutters:nth-of-type(2) [placeholder='Type here']"
    verifyResumeFieldTxt = ".oxd-file-input-div"
    resumeUploadTxt = "input.oxd-file-input"
    verifyFileNameTxt = ".oxd-file-input-div"
    keywordsTxt = ".orangehrm-save-candidate-page-full-width.oxd-grid-item.oxd-grid-item--gutters > .oxd-input-field-bottom-space.oxd-input-group  .oxd-input"
    notesTxt = ".oxd-textarea.oxd-textarea--resize-vertical"
    checkBoxTxt = ".bi-check.oxd-checkbox-input-icon.oxd-icon"
    saveBtnTxt = "button[type='submit']"
    verifyCandidateNameTxt = "div:nth-of-type(1) > .oxd-input-group  .oxd-text.oxd-text--p"
    verifyStatusTxt = ".orangehrm-recruitment-status > p"

    clickRecruitment(){
        cy.get(this.recruitmentTxt).should('be.visible')
        cy.get(this.recruitmentTxt).click()
        cy.log("User clicked on Recruitment menu from left pannel")
        cy.addContext("User clicked on Recruitment menu from left pannel")
    }

    verifyRecruitmentTxt(){
        cy.get(this.verifyRecruitmentTxt).should('have.text','Recruitment')
        cy.log("User verified Recruitment text")
        cy.addContext("User verified Recruitment text")

    }

    clickAddBtn(){
        cy.get(this.addBtnTxt).should('be.visible')
        cy.get(this.addBtnTxt).click()
        cy.log("User clicked on Add button")
        cy.addContext("User clicked on Add button")
    }

    setFirstName(firstName){
        cy.get(this.firstNameTxt).should('be.visible')
        cy.get(this.firstNameTxt).type(firstName).should('have.value',firstName)
        cy.log("User entered First Name as --> "+firstName)
        cy.addContext("User entered First Name as --> "+firstName)
    }

    setMiddleName(middleName){
        cy.get(this.middleNameTxt).should('be.visible')
        cy.get(this.middleNameTxt).type(middleName).should('have.value',middleName)
        cy.log("User entered Middle Name as --> "+middleName)
        cy.addContext("User entered Middle Name as --> "+middleName)
    }

    setLastName(lastName){
        cy.get(this.lastNameTxt).should('be.visible')
        cy.get(this.lastNameTxt).type(lastName).should('have.value',lastName)
        cy.log("User entered Last Name as --> "+lastName)
        cy.addContext("User entered Last Name as --> "+lastName)
    }

    setDropDown(vacancy){
        cy.get(this.dropDownTxt).click()
        cy.contains(vacancy).click()
        cy.log("User selected vacancy from drop down --> "+vacancy)
        cy.addContext("User selected vacancy from drop down --> "+vacancy)
       
    }

    setEmailId(emailId){
        cy.get(this.emailTxt).should('be.visible')
        cy.get(this.emailTxt).type(emailId).should('have.value',emailId)
        cy.log("User entered Email-ID as --> "+emailId)
        cy.addContext("User entered Email-ID as --> "+emailId)
    }

    setContactNumber(contactNumber){  
        cy.get(this.contactNumberTxt).should('be.visible')
        cy.get(this.contactNumberTxt).type(contactNumber).should('have.value',contactNumber)
        cy.log("User entered Contact Number as --> "+contactNumber)
        cy.addContext("User entered Contact Number as --> "+contactNumber)
}

    resumeUpload(fileName){
        cy.get(this.verifyFileNameTxt).should('be.visible').should('have.text','No file selected')
        cy.get(this.resumeUploadTxt).selectFile("cypress/fixtures/"+fileName,{force: true})
        cy.log("User uploaded resume file as --> "+fileName)
        cy.addContext("User uploaded resume file as --> "+fileName)
    }

    verifyFileName(fileName){
        cy.get(this.verifyFileNameTxt).should('be.visible').should('have.text',fileName)
        cy.log("User verify uploaded resume file name as --> "+fileName)
        cy.addContext("User verfiy uploaded resume file name as --> "+fileName)
    }
    setKeywords(keywords){
        cy.get(this.keywordsTxt).should('be.visible')
        cy.get(this.keywordsTxt).type(keywords).should('have.value',keywords)
        cy.log("User entered Keywords as --> "+keywords)
        cy.addContext("User entered Keywords as --> "+keywords)
    }

    setNotes(notes){
        cy.get(this.notesTxt).should('be.visible')
        cy.get(this.notesTxt).type(notes).should('have.value',notes)
        cy.log("User entered Notes as --> "+notes)
        cy.addContext("User entered Notes as --> "+notes)
    }

    checkBox(){
        cy.get(this.checkBoxTxt).click()
        cy.log("User clicked on consent Checkbox")
        cy.addContext("User clicked on consent Checkbox")
    }

    clickSaveBtn(){
        cy.get(this.saveBtnTxt).should('be.visible')
        cy.get(this.saveBtnTxt).click()
        cy.log("User clicked on Save button")
        cy.addContext("User clicked on Save button")
    }

    verifyCandidateName(firstName,middleName,lastName){
        cy.get(this.verifyCandidateNameTxt).should('be.visible').should('have.text',firstName+" "+middleName+" "+lastName)
        cy.log("User verified Candidate's name after successfully creating the profile")
        cy.addContext("User verified Candidate's name after successfully creating the profile")
        
    }

    verifyStatus(status)
   {
    cy.get(this.verifyStatusTxt).should('be.visible').should('contain.text',status)
    cy.log("User verified Candidate's application status after successfully creating the profile")
    cy.addContext("User verified Candidate's application status after successfully creating the profile")
   } 
}


export default addCandidate