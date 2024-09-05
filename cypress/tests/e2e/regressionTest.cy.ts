import userData from "../fixtures/userData.json"
import LoginPage from "../pages/loginpage"
import createAccount from "../pages/createAccountPage"
import HomePage from "../pages/homePage"
import topBarMenu from "../pages/topBarMenuPage"
import MenuPage from "../pages/menuPage"

const loginPage = new LoginPage()
const createAccountPage = new createAccount()
const homePage = new HomePage()
const topBarMenuPage = new topBarMenu()
const menuPage = new MenuPage()

const userFail = userData.userFail
const userSuccess = userData.userSuccess
const userBank = userData.userBank
const userTransaction = userData.userTransaction

describe('Regression Test', () => {
  it('Teste de Regressão', () => {

    loginPage.checkpage()

    loginPage.checkLoginArea()

    loginPage.loginWithAnyUserFail(userFail.username, userFail.password)

    loginPage.loginFail()

    loginPage.checkLoginArea()

    loginPage.checkpage()

    loginPage.checkLoginArea()

    loginPage.createAccount()

    createAccountPage.checkpage()

    createAccountPage.createNewAccountFail(userFail.firstname, userFail.lastname, userFail.username, userFail.password, userFail.confirmPassword)

    createAccountPage.passwordRequired()

    createAccountPage.createAccountDone()

    loginPage.checkpage()

    loginPage.createAccount()

    createAccountPage.createNewAccount(userSuccess.firstname, userSuccess.lastname, userSuccess.username, userSuccess.password, userSuccess.confirmPassword)

    loginPage.checkLoginArea()

    loginPage.loginWithAnyUser(userSuccess.username, userSuccess.password)

    createAccountPage.createBankAccount(userBank.bankName, userBank.routingName, userBank.accountNumber)

    homePage.checkUserArea()

    menuPage.logout()

    loginPage.checkLoginArea()

    loginPage.loginWithAnyUser(userSuccess.username, userSuccess.password)

    homePage.checkUserArea()

    topBarMenuPage.optionsMenuEveryone()

    topBarMenuPage.transactionNew()

    homePage.withMoneySearch(userTransaction.userSearch)

    homePage.withMoneyPayment(userTransaction.userValue, userTransaction.userAmount)

    menuPage.logout()

    loginPage.checkLoginArea()

  })

})