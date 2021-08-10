import { navigation } from "../page_objects/navigation"
import { register } from "../page_objects/register"
import { bookingPage } from "../page_objects/booking"

describe ('zakazivanje', () => {
    before(() => {
        cy.visit('')
    })
    it('otici na register', () => {
        navigation.registerPage()
        register.pageName.should('have.text', 'Sign Up')
    })
    it('registracija', () => {
        register.registerUser()
        cy.url().should('contain', '/account')
    })
    it('vratimo se na home', () => {
        navigation.HomeBtn.click({ force: true })
        cy.url().should('contain', 'home')
    })
    it('kliknemo na rentals', () => {
        bookingPage.selectRentals()
    })
    it('zakazujemo rental', () => {
        bookingPage.selectRentals()
        bookingPage.bookRental()
    })
})