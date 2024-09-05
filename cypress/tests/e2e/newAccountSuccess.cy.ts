import LoginPage from "../../pages/loginpage"
import createAccount from "../../pages/createAccountPage"
import HomePage from "../../pages/homePage"
import MenuPage from "../../pages/menuPage"

const loginPage = new LoginPage()
const createAccountPage = new createAccount()
const homePage = new HomePage()
const menuPage = new MenuPage()

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {

    loginPage.checkpage()

    loginPage.checkLoginArea()

    loginPage.createAccount()

    createAccountPage.checkpage()

    createAccountPage.createNewAccount('Bruno', 'Ribeiro', 'brunosrd', 'test123', 'test123')

    loginPage.checkLoginArea()

    loginPage.loginWithAnyUser('brunosrd', 'test123')

    createAccountPage.createBankAccount('Inter', '123456789', '1231993458')

    homePage.checkUserArea()

    menuPage.logout()

    loginPage.checkLoginArea()

  });
});