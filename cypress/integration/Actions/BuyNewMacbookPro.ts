import MacbookProHomepage from "../Pageobjects/MacbookProHomepage";

class BuyNewMacbookPro{

    buysMacbookPro(){
       cy.Click(MacbookProHomepage.BuyButton);     
    }
}
export default BuyNewMacbookPro;