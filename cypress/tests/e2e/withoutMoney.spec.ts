import LoginPage from "../../pages/loginpage"
import HoemPage from "../../pages/homePage"
import topBarMenu from "../../pages/topBarMenuPage";
import createAccount from "../../pages/createAccountPage";

const loginPage = new LoginPage()
const homePage = new HoemPage()
const topBarMenuPage = new topBarMenu()
const createAccountPage = new createAccount()


describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        loginPage.checkpage()

        loginPage.loginWithAnyUser('teste123', 'teste123')

        createAccountPage.createBankAccount('NuBank', '123456789', '123456789')

        homePage.checkUserArea()

        topBarMenuPage.transactionNew()

        homePage.withMoneySearch("Gustavo Guanabara")

        homePage.cashlessPayment("10.00", "Loja")
    });
});
