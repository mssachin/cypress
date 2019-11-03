import GoogleSearchResultsPage from "../Pageobjects/GoogleSearchResultsPage";
class ExtractSearchResultsHeader{

    extractsSearchResultsHeader(){
        cy.ReturnTextFromElements(GoogleSearchResultsPage.SingleSearchResultHeading);
    }
}
export default ExtractSearchResultsHeader;