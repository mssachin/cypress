/// <reference types="Cypress" />
import {Given, When} from "cypress-cucumber-preprocessor/steps"
import EnterSearchQuery from "../Actions/EnterSearchQuery"
import ExtractSearchResultsHeader from "../Actions/ExtractSearchResultHeaders"

let enterSearchQuery = new EnterSearchQuery();
let extractSearchResultsHeaders = new ExtractSearchResultsHeader()
Given('Eric performs a search for {string} in google', (searchQuery) => {
  cy.visit("");
  enterSearchQuery.entersSearchQuery(searchQuery);
  extractSearchResultsHeaders.extractsSearchResultsHeader();
})