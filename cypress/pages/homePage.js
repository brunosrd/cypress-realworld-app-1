class HomePage {

    selectorsList() {
      const selectors = {
        homepage: "[data-test='sidenav']",
        searchField: "[data-test='user-list-search-input']",
        userList: "[data-test='users-list']",
        amountField: "[data-test='transaction-create-amount-input']",
        description: "[data-test='transaction-create-description-input']",
        payButton: "[data-test='transaction-create-submit-payment']",
        alerteBarSuccess: "[data-test='alert-bar-success']",
        everyoneField: "[data-test='nav-public-tab']",
        friendsField: "[data-test='nav-contacts-tab']",
        mineField: "[data-test='nav-personal-tab']",
        createATransactionField: "[data-test='transaction-list-empty-create-transaction-button']",
      }
  
      return selectors
    }
  
    checkUserArea() {
      cy.get(this.selectorsList().homepage).should('be.visible')
    }
  
    withMoneySearch(userSearch) {
      cy.get(this.selectorsList().searchField).type(userSearch, { force: true })
      cy.get(this.selectorsList().userList).eq(0).click()
    }
  
    withMoneyPayment(cashValue, addANote) {
      cy.get(this.selectorsList().amountField).type(cashValue)
      cy.get(this.selectorsList().description).type(addANote)
      cy.get(this.selectorsList().payButton).click()
      cy.get(this.selectorsList().alerteBarSuccess).should('be.visible')
    }
  
    cashlessPayment(cashValue, addANote) {
      cy.get(this.selectorsList().amountField).type(cashValue)
      cy.get(this.selectorsList().description).type(addANote)
      cy.get(this.selectorsList().payButton).click()
      cy.get(this.selectorsList().alerteBarSuccess).should('be.visible')
      cy.log('payment made without balance - error found')
    }
  
    createATransaction() {
      cy.get(this.selectorsList().createATransactionField).click()
    }
  }
  
  export default HomePage
  
  
  