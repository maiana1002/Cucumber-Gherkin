Feature: Sistema de Login

Como um usuário,
Eu quero fazer login no sistema,
Para acessar minha conta de forma segura.

Scenario: Login com sucesso
  Given que o usuário forneceu um nome de usuário válido
  And a senha está correta
  When o usuário tenta fazer login
  Then ele deve ser redirecionado para a página inicial

Scenario: Login com falha - usuário inválido
  Given que o usuário forneceu um nome de usuário inválido
  When o usuário tenta fazer login
  Then uma mensagem de erro "Usuário não encontrado" deve ser exibida

Scenario: Login com falha - senha incorreta
  Given que o usuário forneceu um nome de usuário válido
  And a senha está incorreta
  When o usuário tenta fazer login
  Then uma mensagem de erro "Senha incorreta" deve ser exibida
