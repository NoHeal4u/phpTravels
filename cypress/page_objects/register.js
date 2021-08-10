const faker = require('faker')
const userData = require('../fixtures/userData.json')

class Register {

    get pageName(){
        return cy.get('h3').eq(0)
    }
    get firstName(){
        return cy.get("input[name='firstname']")
    }
    get lastName(){
        return cy.get("input[name='lastname']")
    }
    get mobile(){
        return cy.get("input[name='phone']")
    }
    get email(){
        return cy.get("input[name='email']")
    }
    get password(){
        return cy.get("input[name='password']")
    }
    get confirmPassword(){
        return cy.get("input[name='confirmpassword']")
    }
    get submit(){
        return cy.get("button[class='signupbtn btn_full btn btn-success btn-block btn-lg']")
    }

    registerUser(){
        this.firstName.type(userData.user.firstName, {force : true})
        this.lastName.type(userData.user.lastName, {force : true})
        this.mobile.type(userData.user.mobile, {force : true})
        this.email.type(faker.internet.email(), {force : true})
        this.password.type(userData.user.password, {force : true})
        this.confirmPassword.type(userData.user.password, {force : true})
        this.submit.click({force : true})
    }
}



export const register = new Register ()