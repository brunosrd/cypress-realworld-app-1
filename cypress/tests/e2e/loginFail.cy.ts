import LoginPage from "../../pages/loginPage"

const loginPage = new LoginPage()

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {

    loginPage.checkpage()

    loginPage.checkLoginArea()

    loginPage.loginWithAnyUserFail('brunosrd', 'teste321')

    loginPage.loginFail()

    loginPage.checkLoginArea()
  });
});