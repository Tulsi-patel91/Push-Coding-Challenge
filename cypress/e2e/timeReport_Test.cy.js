import projectTimeReport from "../PageObjects/projectTimeReport"

describe('View and Verify project time report',()=>{
    const projecttimeReport = new projectTimeReport()
    let testData
    before( ()=>{
        cy.fixture("TimeReportTestData").then((data)=>{
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

    it.only('Validate all activites are listed in project time report',()=>{

        projecttimeReport.clickTime()
        projecttimeReport.clickReportMenu()
        projecttimeReport.clickProjectReport()
        projecttimeReport.setProjectName(testData.projectName)
        projecttimeReport.setFromDate(testData.fromDate)
        projecttimeReport.setToDate(testData.toDate)
        projecttimeReport.clickViewBtn()
        projecttimeReport.verifyBugFixesText(testData.bugFixesTxt)
        projecttimeReport.verifyFeatureDevelopmentText(testData.featureDevelopmentTxt)
        projecttimeReport.verifyImplementationText(testData.implementationTxt)
        projecttimeReport.verifyQATestingText(testData.QATestingTxt)
        projecttimeReport.verifyReqGatheringText(testData.reqGatheringTxt)
        projecttimeReport.verifySupportMainText(testData.supportMainTxt)
    })
})