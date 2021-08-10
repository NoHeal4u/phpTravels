const userData = require('../fixtures/userData.json')
class BookingPage {
    get rentalsBtn(){
        return cy.get("a[data-name='rentals']")
    }
    get activateDestinationInput(){
        return cy.get("div[class='select2-container form-control hotelsearch locationlistrentals'] > a")
    }
    get destinationInput(){
        return cy.get("div#select2-drop  .select2-input")
    }
    get submit(){
        return cy.get("div#rentals > .ftab-inner.menu-horizontal-content  form[role='search'] .btn.btn-block.btn-primary")
    }
    selectRentals(){
        this.rentalsBtn.click({force:true})
    }
    bookRental(){
        this.activateDestinationInput.click({force : true})
        this.destinationInput.type(`${userData.rental.hotelName}{enter}`) //ovako bez klika na neki buton submitujemo unos
        this.submit.click({force : true })
    }
}
export const bookingPage = new BookingPage()