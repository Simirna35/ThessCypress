///  <reference types ="cypress"/>


 describe('Context : My First Tests', () => {

    before(() => {

        // run once before all test cases in this describe block, like beforeclass in testNg
        
    })
beforeEach(()=> {
    // run before each test case, beforeMethode in TestNg
    cy.clearCookies();

})

after(()=>{

    // similar to aftermethod in testNg

})


afterEach (()=>{

        // similar to aftermethod in testNg

})

it('Opening a web application', () => {
    cy.visit('/#!/login')
     cy.get('button.button').click;


})

})