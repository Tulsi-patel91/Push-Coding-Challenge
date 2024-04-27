class projectTimeReport{

    timeTxt = "ul[class='oxd-main-menu'] > li:nth-child(4) > a> span"
    reportTxt = "nav[aria-label='Topbar Menu']>ul>li:nth-child(3)"
    projectReportTxt = "nav[aria-label='Topbar Menu']>ul>li:nth-child(3)>ul>li:first-child"
    projectNameTxt = ".oxd-autocomplete-wrapper>div>input"
    fromDateTxt = "[placeholder='From']"
    toDateTxt = "[placeholder='To']"
    viewBtnTxt = "button[type='submit']"
    verifyBugFixesTxt = "div:nth-of-type(1) > .cell-action.rgCell"
    verifyFeatureDevelopmentTxt = "div:nth-of-type(2) > .cell-action.rgCell"
    verifyImplementationTxt = "div:nth-of-type(3) > .cell-action.rgCell"
    verifyQATestingTxt = "div:nth-of-type(4) > .cell-action.rgCell"
    verifyReqGatheringTxt = "div:nth-of-type(5) > .cell-action.rgCell"
    verifySupportMainTxt = "div:nth-of-type(6) > .cell-action.rgCell"


    clickTime(){
        cy.get(this.timeTxt).should('be.visible')
        cy.get(this.timeTxt).click()
        cy.log("User clicked on Time from left pannel")
        cy.addContext("User clicked on Time from left pannel")
    }

    clickReportMenu(){
        cy.get(this.reportTxt).should('be.visible')
        cy.get(this.reportTxt).click()
        cy.log("User clicked on Report on top pannel")
        cy.addContext("User clicked on Report on top pannel")
    }

    clickProjectReport(){
        cy.get(this.projectReportTxt).should('be.visible')
        cy.get(this.projectReportTxt).click()
        cy.log("User selected Project Report from drop down")
        cy.addContext("User selected Project Report from drop down")
    }

    setProjectName(projectName){
        cy.get(this.projectNameTxt).should('be.visible')
        cy.get(this.projectNameTxt).type(projectName)
        cy.contains(projectName).click()

    }

    setFromDate(fromDate){
        cy.get(this.fromDateTxt).should('be.visible')
        cy.get(this.fromDateTxt).type(fromDate).should('have.value',fromDate)
        cy.get(this.fromDateTxt).click().should('have.value',fromDate)
        cy.log("User selected from date "+fromDate)
        cy.addContext("User selected from date "+fromDate)
    }

    setToDate(toDate){
        cy.get(this.toDateTxt).should('be.visible')
        cy.get(this.toDateTxt).type(toDate)
        cy.get(this.toDateTxt).click().should('have.value',toDate)
        cy.log("User selected to date "+toDate)
        cy.addContext("User selected to date "+toDate)
    }

    clickViewBtn(){
        cy.get(this.viewBtnTxt).should('be.visible')
        cy.get(this.viewBtnTxt).click()
        cy.log("User clicked on View button")
        cy.addContext("User clicked on View button")
    }

    verifyBugFixesText(expectedText){
        cy.get(this.verifyBugFixesTxt).should('be.visible').should('have.text',expectedText)
        cy.log("User verified  "+expectedText+" activity is present in the list")
        cy.addContext("User verified  "+expectedText+" activity is present in the list")
    }

    verifyFeatureDevelopmentText(expectedText){
        cy.get(this.verifyFeatureDevelopmentTxt).should('be.visible').should('have.text',expectedText)
        cy.log("User verified  "+expectedText+" activity is present in the list")
        cy.addContext("User verified  "+expectedText+" activity is present in the list")
    }

    verifyImplementationText(expectedText){
        cy.get(this.verifyImplementationTxt).should('be.visible').should('have.text',expectedText)
        cy.log("User verified  "+expectedText+" activity is present in the list")
        cy.addContext("User verified  "+expectedText+" activity is present in the list")
    }

    verifyQATestingText(expectedText){
        cy.get(this.verifyQATestingTxt).should('be.visible').should('have.text',expectedText)
        cy.log("User verified  "+expectedText+" activity is present in the list")
        cy.addContext("User verified  "+expectedText+" activity is present in the list")
    }

    verifyReqGatheringText(expectedText){
        cy.get(this.verifyReqGatheringTxt).should('be.visible').should('have.text',expectedText)
        cy.log("User verified  "+expectedText+" activity is present in the list")
        cy.addContext("User verified  "+expectedText+" activity is present in the list")
    }

    verifySupportMainText(expectedText){
        cy.get(this.verifySupportMainTxt).should('be.visible').should('have.text',expectedText)
        cy.log("User verified  "+expectedText+" activity is present in the list")
        cy.addContext("User verified  "+expectedText+" activity is present in the list")
    }
}

export default projectTimeReport