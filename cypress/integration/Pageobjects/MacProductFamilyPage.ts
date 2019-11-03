class MacProductFamilyPage{

    static selectMacProduct(productName:String) {
    return "nav[aria-label='Mac Family of products'] div ul li a[href*='" + productName +"']";
    }
}

export default MacProductFamilyPage;