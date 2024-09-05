class topBarMenu {

    selectorsList() {
        const selectors = {
            transactionNewButton: "[data-test='nav-top-new-transaction']",
            everyoneField: "[data-test='nav-public-tab']",
            friendsField: "[data-test='nav-contacts-tab']",
            mineField: "[data-test='nav-personal-tab']",

        }
        return selectors
    }

    transactionNew() {
        cy.get(this.selectorsList().transactionNewButton).eq(0).click()
    }

    optionsMenuEveryone() {
        cy.get(this.selectorsList().everyoneField).click()
    }

    optionsMenuFriends() {
        cy.get(this.selectorsList().friendsField).click()
    }

    optionsMenuMine() {
        cy.get(this.selectorsList().mineField).click()
    }


}

export default topBarMenu