class Navigation {
    get HomeBtn(){
        return cy.get("img[src='https://phptravels.net/uploads/global/logo.png']")
    }

    get MyAccuntBtn(){
        return cy.get("a[id='dropdownCurrency']")
    }

    get SignUpBtn(){
        return cy.get("a[href='https://phptravels.net/register']")
    }
    clickHome(){
        this.HomeBtn.click({force : true})
    }
    registerPage(){
        this.MyAccuntBtn.eq(1).click({ force : true})
        this.SignUpBtn.click({force : true})
    }


}

export const navigation = new Navigation()