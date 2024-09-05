import LoginPage from "../../pages/loginpage"
import HomePage from "../../pages/homePage"
import topBarMenu from "../../pages/topBarMenuPage"
import createAccount from "../../pages/createAccountPage"

const loginPage = new LoginPage()
const homePage = new HomePage()
const topBarMenuPage = new topBarMenu()
const createAccountPage = new createAccount()


describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {

        loginPage.checkpage()

        loginPage.loginWithAnyUser('brunosrd', 'test123')

        createAccountPage.createBankAccount('Inter', '123456789', '1231993458')

        homePage.checkUserArea()

        topBarMenuPage.transactionNew()

        homePage.withMoneySearch("Gustavo Guanabara")

        homePage.withMoneyPayment("10.00", "Loja")
    });
});
