///  <reference types ="cypress"/>


describe('Find or get elements bu using different locators', () => {

  beforeEach(()=> {
    // run before each test case, beforeMethode in TestNg
    cy.clearCookies();
    cy.visit('/#!/login')

})


it('Check different locators strategies', () => {

    // by css locator
    cy.get("input[id='login']").type("DrMetin"); // every statement creates an object to be interacted, and next command makes operation to the created at the previous statement.
 
    // attribute name and value
    cy.get("input[type='text']").clear(); // cleat what is typed

   //  

})

})

   




