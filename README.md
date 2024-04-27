<font color="yellow">*************** Please read document carefully and follow all steps to run the test suite locally ***************</font>

Test suite is developed using the Cypress framework and the JavaScript programming language. Before executing test suite locally, please follow ensure pre-requisites are fulfilled,

## Pre-requisites to run test from local:
1) Cypress is built on JavaScript, and it leverages Node.js to execute JavaScript code and npm is the package manager for JavaScript. So please download and install “Node.js and npm” from https://nodejs.org/en
2) After downloading and installing Node.js and npm open a command prompt and run the following commands to check if Node.js and npm are installed, 

	 <font color="yellow">node -v</font>

     <font color="yellow">npm -v</font>
3) Visual Studio Code (VS Code) is a popular source-code editor that is commonly used for working with Cypress for writing end-to-end tests. Please download and install from https://code.visualstudio.com/download
4) Open VS Code and click on Terminal from top menu panel and then click on New Terminal. New Terminal will open in bottom and then type the below command to install Cypress,

   <font color="yellow"> npm install cypress --save -dev </font>
	
    Same command you can execute in command prompt to install Cypress.

## Clone the repository locally:
1)	Use below command in the command line to clone the repository locally,

	git clone https://github.com/Tulsi-patel91/Push-Coding-Challenge.git
2)	To clone a specific branch, use below command in command line,

	Git clone -b <BRANCH_NAME> https://github.com/Tulsi-patel91/Push-Coding-Challenge.git
## To open a Cypress project in VS Code that you have cloned from a repository, follow these steps:
1)	<font color="yellow">Open Folder:</font> In VS Code, click on <font color="yellow">File</font> in the top-left corner. Select "Open Folder..." from the dropdown menu.
2)	<font color="yellow">Navigate to Cloned Project:</font> Navigate to the directory where you have cloned the Cypress project. Select the folder that contains your Cypress project files.
3)	<font color="yellow">Open the Project:</font> Click the <font color="yellow">Open </font> button in the file dialog. This will open your Cypress project in VS Code.

## To run tests in Cypress, you can follow these general steps:

1) Install below dependencies by typing below command in your VS Code terminal,
   - npm install --save -dev cypress-file-upload
   - npm i --save-dev cypress-mochawesome-reporter
  
2)	Go to VS code terminal and type command <font color="yellow">npx cypress open</font>, this command is used to launch the Cypress Test Runner in interactive mode. When you run this command, Cypress opens a graphical user interface (GUI) that provides a convenient way to view, manage, and run your Cypress tests.
3)	Once you will execute above command a Cypress Test Runner will open and then select <font color="yellow">E2E Testing</font>.
4)	After clicking on <font color="yellow">E2E Testing</font> you must choose your preferred browser for E2E testing, it will show options Chrome, Firefox, Edge, and Electron. 
      
    - <font color="yellow">Note:</font> Cypress currently support Chrome, Firefox, and Edge browser so to execute your test script that browser needs to be installed in your system. Electron is a by default browser provided by cypress.
5)	After selecting browser click on <font color="yellow">Start E2E Testing</font> button and selected browser will open automatically and it will display all <font color="yellow">spec files</font> which are created under E2E folder.
6)	Select the spec file you want to execute, and test will start executing. As tests run, the Test Runner displays the real-time execution of your tests in an actual browser. You can see each step being executed, making it easier to identify any issues.

## There is another way to execute test through VS Code terminal or Command prompt
1)	Go to VS code terminal and type command <font color="yellow">npx cypress run</font>, this command is used to execute Cypress tests in non-interactive mode, meaning it runs your tests without launching the Cypress Test Runner UI. It will execute all test files in headless mode and in by default browser i.e. <font color="yellow">Electron</font>.
2)	To run specific test file use command <font color="yellow">npx cypress run  --spec cypress\e2e\Login_Test.cy.js</font>.
3)	To run specific test file and in specific browser use command <font color="yellow">npx cypress run --browser chrome --spec cypress\e2e\Login_Test.cy.js</font>.
4)	To run specific test file in specific browser and in headed mode use command <font color="yellow">npx cypress run --browser chrome --spec cypress\e2e\Login_Test.cy.js --headed</font>.

## Brief Description of Automation framework and file/folder:

Test automation scripts are developed using the Page Object Model (POM) design pattern in Cypress framework which offers several advantages that contribute to the maintainability, scalability, and readability of test code. Here are some key reasons to use the POM design pattern in framework:
1)	<font color="yellow">Code Reusability:</font> Page Objects encapsulate the details of interacting with elements on a specific page or component. To achieve we create a folder named PageObjects under cypress folder to store all Page Objects. Each Page Object should represent a specific page or component of application.
2)	<font color="yellow">Maintainability:</font> When the structure of a web page changes, you only need to update the corresponding Page Object. We create JavaScript files for each Page Object. These files contain classes representing the elements and actions on the corresponding page. This makes maintenance easier, as changes are localized to the relevant files, reducing the impact on the rest of our test suite.
3)	<font color="yellow">Readability:</font> Test scripts become more readable and concise when they use Page Objects. Test cases focus on high-level actions, such as logging in or submitting a form, rather than the nitty-gritty details of element selectors and interactions.
4)	<font color="yellow">Scalability:</font> As our application grows and the number of test cases increases, the POM pattern helps manage the complexity. Each Page Object represents a specific part of our application, making it easier to scale our test suite.
5)	<font color="yellow">Easier Adoption of New QA Developers:</font> New team members can quickly understand and contribute to the test suite when a consistent and modular structure, such as the POM pattern, is in place. Page Objects serve as a clear interface for understanding how to interact with different parts of the application.

<font color="yellow">PageObjects folder:</font> This folder will hold all JavaScript files in which we will define all WebElements, Action to be performed and Assertions. We will create separate JavaScript file for specific page or component of application.

<font color="yellow">Fixtures module:</font> This module will contain test data files which can be of any type like Json, Excel, CSV, PDF, DOCX and so on. We will also keep the files in same folder to test file upload functionality. 

<font color="yellow">e2e module:</font> All the spec files will be created under this module with “.cy.js” extension. These files will contain all the test cases and will create separate spec file for specific page or component of application.

<font color="yellow">Support module:</font> This module will contain commands.js and e2e.js files.
1)	<font color="yellow">Commands.js file:</font> In this file we will creating custom commands that extend Cypress' functionality and encapsulate commonly used actions or assertions. This file allows to define our own commands for repetitive task or actions that can be reused across multiple test files. Like I have created Login custom command using <font color="yellow">Cypress.Commands.add()</font>.
2)	<font color="yellow">E2e.js file:</font> This file is being used to set up global configurations, custom commands, or other support functionalities for end-to-end (E2E) testing. I have included <font color="yellow">require('cypress-file-upload') </font>and <font color="yellow">import 'cypress-mochawesome-reporter/register'</font>.

<font color="yellow">Assertions and Exceptions:</font> 

- 	<font color="yellow">cy.get().should():</font> It is a BDD-style library and we can chain assertions directly to the cy.get() command to assert on properties or states of elements. I have used multiple assertions in all test cases like <font color="yellow">cy.get().should(‘be.visible’).should(‘have.value’,’value’)</font> to assert whether the element is visible and also to assert whether the value we have passed from our test data file is exactly same in the respective field.

- I have included <font color="yellow">Cypress.on()</font> method for all uncaught exceptions that are thrown from the website not from our test case, below is the code, 
<font color="yellow">  Cypress.on('uncaught:exception',(err,Runnable)=>{
    return false
}) </font>

<font color="yellow">Reporting and Logs:</font>

- I have integrated Mocha HTML report with Cypress framework which will generate HTML report after every test run, and it will attach screenshot in the report whenever the test case fails.

- For logs I have used cypress in-build command <font color="yellow">cy.log()</font> and also created a custom command to add Additional Test Context in the HTML report which can help for debugging. Below addContext() custom command is added in commands.js
   - <font color="yellow"> Cypress.Commands.add('addContext', (context)=>{
    cy.once('test:after:run', (test) => addContext({ test }, context))
}) </font>

  
