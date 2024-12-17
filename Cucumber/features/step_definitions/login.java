    import io.cucumber.java.en.Given;
    import io.cucumber.java.en.When;
    import io.cucumber.java.en.Then;
    import static org.junit.Assert.assertTrue;
    
    public class Login {
    
        @Given("que estou na página de login")
        public void givenQueEstouNaPaginaDeLogin() {
            System.out.println("Estou na página de login");
        }
    
        @When("insiro o nome de usuário e senha")
        public void whenInsiroONomeDeUsuarioESenha() {
            System.out.println("Nome de usuário e senha inseridos");
        }
    
        @Then("devo ser redirecionado para o painel principal")
        public void thenDevoSerRedirecionadoParaOPainelPrincipal() {
            // Aqui você pode adicionar uma verificação real, como um assert
            assertTrue(true);  // Exemplo de verificação simples
            System.out.println("O usuário foi redirecionado");
        }
    }
}     
