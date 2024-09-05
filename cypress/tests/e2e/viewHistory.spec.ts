import LoginPage from "../../pages/loginpage"
import HomePage from "../../pages/homePage"
import topBarMenu from "../../pages/topBarMenuPage"
import createAccount from "../../pages/createAccountPage"

const loginPage = new LoginPage()
const homePage = new HomePage()
const topBarMenuPage = new topBarMenu()
const createAccountPage = new createAccount()


describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {

        loginPage.checkpage()

        loginPage.loginWithAnyUser('LumeStack', 'test123')

        createAccountPage.createBankAccount('NuBank', '123456789', '123456789')

        homePage.checkUserArea()

        topBarMenuPage.optionsMenuEveryone()

    });
});