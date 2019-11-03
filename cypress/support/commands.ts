// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("Click",(locator) =>{
    cy.get(locator).click({force: true});
})

Cypress.Commands.add("EnterInto", (locator, text) =>{
    cy.get(locator).type(text);
})
Cypress.Commands.add("KeyboardEnter",(locator) =>{
  cy.get(locator).type('{enter}');
})
Cypress.Commands.add("ReturnTextFromElements",(locator)=>{
  cy.get(locator).each(($el, index, $list)=>{
    let textArr = new Array($list.length); 
    const linkText = $el.text();
    textArr.push(linkText);
    cy.log(linkText);
  }) 
})

Cypress.Commands.add("WaitForAnObject", (locator)=>{
  cy.wait(locator);
})

declare global {
    namespace Cypress {
        interface Chainable<Subject> {
        Click(locator: string): void
        EnterInto(locator:string,text:string):void
        KeyboardEnter(locator:string):void
        ReturnTextFromElements(locator:string):void
      }
    }
  }
  
  // Convert this to a module instead of script (allows import/export)
  export {}

