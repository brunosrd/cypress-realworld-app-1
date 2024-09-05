class MenuPage {

    selectorsList() {
        const selectors = {
            homeButton: "[data-test='sidenav-home']",
            myAccountButton: "[data-test='sidenav-user-settings']",
            bankAccountButton: "[data-test='sidenav-bankaccounts']",
            notificationsButton: "[data-test='sidenav-notifications']",
            logoutButton: "[data-test='sidenav-signout']"
        }
        return selectors
    }

    home() {
        cy.get(this.selectorsList().homeButton).click()
    }

    myAccount() {
        cy.get(this.selectorsList().myAccountButton).click()
    }

    bankAccount() {
        cy.get(this.selectorsList().bankAccountButton).click()
    }

    notifications() {
        cy.get(this.selectorsList().notificationsButton).click()
    }

    logout() {
        cy.get(this.selectorsList().logoutButton).click({ force: true })
    }
}

export default MenuPage