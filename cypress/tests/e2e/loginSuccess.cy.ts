import LoginPage from "../../pages/loginPage"
import HomePage from "../../pages/homePage"
import createAccount from "../../pages/createAccountPage"

const loginPage = new LoginPage()
const homePage = new HomePage()
const createAccountPage = new createAccount()


describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {

    loginPage.checkpage()

    loginPage.loginWithAnyUser('brunosrd', 'test123')

    createAccountPage.createBankAccount('Inter', '123456789', '1231993458')

    homePage.checkUserArea()
  });
});