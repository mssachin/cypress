import GoogleHomepage from "../Pageobjects/GoogleHomepage";

class EnterSearchQuery{


    entersSearchQuery(searchQuery:string){
        cy.EnterInto(GoogleHomepage.SearchBox, searchQuery);
        cy.KeyboardEnter(GoogleHomepage.SearchBox);
    }
}
export default EnterSearchQuery;