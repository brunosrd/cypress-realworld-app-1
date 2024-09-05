import LoginPage from "../../pages/loginpage"
import createAccount from "../../pages/createAccountPage"

const loginPage = new LoginPage()
const createAccountPage = new createAccount()


describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {

    loginPage.checkpage()

    loginPage.checkLoginArea()

    loginPage.createAccount()

    createAccountPage.checkpage()

    createAccountPage.createNewAccountFail('Bruno', 'Ribeiro', 'brunosrd', 'test123', 'test321')

    createAccountPage.passwordRequired()

  });
});