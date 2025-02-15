class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: "[data-test='signin-username']",
            passawordField: "[data-test='signin-password']",
            signInButton: "[data-test='signin-submit']",
            newAccountButton: "[data-test='signup']",
            loginFailAlert: "[data-test='signin-error']",

        }

        return selectors
    }

    checkpage() {
        cy.visit('/signin')
    }

    checkLoginArea() {
        cy.get(this.selectorsList().signInButton).should('be.visible')
    }

    loginWithAnyUser() {
        cy.get(this.selectorsList().usernameField).type("Bruno")
        cy.get(this.selectorsList().passawordField).type("test123")
        cy.get(this.selectorsList().signInButton).click()
    }

    loginWithAnyUserFail() {
        cy.get(this.selectorsList().usernameField).type("Bruno")
        cy.get(this.selectorsList().passawordField).type("123")
        cy.get(this.selectorsList().signInButton).click()
    }

    createAccount() {
        cy.get(this.selectorsList().newAccountButton).click()
    }

    loginFail() {
        cy.get(this.selectorsList().loginFailAlert).should('be.visible')
    }


}

export default LoginPage