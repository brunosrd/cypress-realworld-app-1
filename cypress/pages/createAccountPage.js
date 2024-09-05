class createAccount {

    selectorsList() {
        const selectors = {
            firstNameField: "[data-test='signup-first-name']",
            lastNameField: "[data-test='signup-last-name']",
            usernameField: "[data-test='signup-username']",
            passwordField: "[data-test='signup-password']",
            confirmPasswordField: "[data-test='signup-confirmPassword']",
            passwordRequiredField: "#confirmPassword-helper-text",
            signUpButtonField: "[data-test='signup-submit']",
            dialogPaper: "[data-test='user-onboarding-dialog-content']",
            nextDoneButton: "[data-test='user-onboarding-next']",
            bankNameField: "[data-test='bankaccount-bankName-input']",
            routingNameField: "[data-test='bankaccount-routingNumber-input']",
            accountNumberField: "[data-test='bankaccount-accountNumber-input']",
            saveButton: "[data-test='bankaccount-submit']",
            createAccountDoneField: ".MuiGrid-root > a",
        }

        return selectors
    }

    checkpage() {
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().confirmPasswordField).should('be.visible')
    }

    createNewAccount(firstname, lastname, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorsList().signUpButtonField).click()
    }

    createBankAccount(bankName, routingName, accountNumber) {
        cy.get('body').then(($element) => {
            if ($element.find(this.selectorsList().dialogPaper)) {
                cy.get(this.selectorsList().nextDoneButton).click()
                cy.get(this.selectorsList().bankNameField).type(bankName)
                cy.get(this.selectorsList().routingNameField).type(routingName)
                cy.get(this.selectorsList().accountNumberField).type(accountNumber)
                cy.get(this.selectorsList().saveButton).click()
                cy.get(this.selectorsList().nextDoneButton).click()
            }
        })
    }

    createNewAccountFail(firstname, lastname, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(userDfirstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorsList().signUpButtonField).should('be.disabled')
    }

    createAccountDone() {
        cy.get(this.selectorsList().createAccountDoneField).click()

    }

    passwordRequired() {
        cy.get(this.selectorsList().passwordRequiredField).should('be.visible')
    }
}

export default createAccount