const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('que o usuário forneceu um nome de usuário válido', function () {
  this.username = 'usuario@exemplo.com';
});

Given('que o usuário forneceu um nome de usuário inválido', function () {
  this.username = 'usuario@invalido.com';
});

Given('a senha está correta', function () {
  this.password = 'senha123';
});

Given('a senha está incorreta', function () {
  this.password = 'senhaErrada';
});

When('o usuário tenta fazer login', function () {
  this.loginResult = (this.username === 'usuario@exemplo.com' && this.password === 'senha123') ? 'sucesso' : 'erro';
});

Then('ele deve ser redirecionado para a página inicial', function () {
  assert.strictEqual(this.loginResult, 'sucesso');
});

Then('uma mensagem de erro "Usuário não encontrado" deve ser exibida', function () {
  assert.strictEqual(this.loginResult, 'erro');
});

Then('uma mensagem de erro "Senha incorreta" deve ser exibida', function () {
  assert.strictEqual(this.loginResult, 'erro');
});
