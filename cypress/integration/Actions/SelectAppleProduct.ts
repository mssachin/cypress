/// <reference types="Cypress" />
import AppleHomepage from "../Pageobjects/AppleHomepage"
import MacProductFamilyPage from "../Pageobjects/MacProductFamilyPage"
class SelectAppleProduct{

    selectsAppleProduct(productName:String){
        cy.Click(AppleHomepage.Maclink);
        cy.Click(MacProductFamilyPage.selectMacProduct(productName));
    }
}
export default SelectAppleProduct;