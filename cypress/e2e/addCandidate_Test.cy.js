
import addCandidate from "../PageObjects/addCandidate"
import verifyCandidateDetails from "../PageObjects/verifyCandidateDetails"


describe('Adding new Candidate profile into application',()=>{

    const addcandidate = new addCandidate()
    const candidateDetails = new verifyCandidateDetails()
    let testData
    before( ()=>{
        cy.fixture("CandidateTestData").then((data)=>{
          testData = data;
        })
    })


    beforeEach(()=>{
        cy.visit('/login')
        cy.Login(Cypress.env('userName'),Cypress.env('password'),Cypress.env('expectedText'))
         
     })

     afterEach(()=>{
        cy.LogOut()
     })

    it('Create candidate profile into application and verfify application status',()=>{

        addcandidate.clickRecruitment()
        addcandidate.clickAddBtn()
        addcandidate.setFirstName(testData.firstName)
        addcandidate.setMiddleName(testData.middleName)
        addcandidate.setLastName(testData.lastName)
        addcandidate.setDropDown(testData.vacancy)
        addcandidate.setEmailId(testData.emailId)
        addcandidate.setContactNumber(testData.contactNumber)
        addcandidate.resumeUpload(testData.fileName)
        addcandidate.verifyFileName(testData.fileName)
        addcandidate.setKeywords(testData.Keywords)
        addcandidate.setNotes(testData.Notes)
        addcandidate.checkBox()
        addcandidate.clickSaveBtn()
        addcandidate.verifyCandidateName(testData.firstName,testData.middleName,testData.lastName)
        addcandidate.verifyStatus(testData.Status)
       })

    it('Verifying User/Candidate details against newly created profile',()=>{

        addcandidate.clickRecruitment()
        candidateDetails.verifyCandidateName(testData.firstName,testData.middleName,testData.lastName)
        candidateDetails.clickEyeBtn()    
        candidateDetails.verifyFirstName(testData.firstName)
        candidateDetails.verifyMiddleName(testData.middleName)
        candidateDetails.verifyLastName(testData.lastName)
        candidateDetails.verifyVacancy(testData.vacancy)
        candidateDetails.verifyEmailId(testData.emailId)
        candidateDetails.verifyContactNumber(testData.contactNumber)
        candidateDetails.verifyResumeName(testData.fileName)
        candidateDetails.verifyKeywords(testData.Keywords)
        candidateDetails.verifyNotes(testData.Notes)
        cy.go('back')
        candidateDetails.clickDeleteBtn()
        candidateDetails.clickConfirmBtn()
    
    })

})