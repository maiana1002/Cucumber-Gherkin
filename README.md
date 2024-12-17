# 🥒 Sistema de Login - Testes Automatizados com Cucumber e Gherkin
Este projeto tem como objetivo demonstrar a automação de testes de uma funcionalidade de login em um sistema simples, utilizando Cucumber e Gherkin para descrever e automatizar os testes. 💻

## Principais funcionalidades

Cenários de Teste
- Login com Sucesso: Testa o login com credenciais válidas.
- Login com Falha (usuário inválido): Verifica se uma mensagem de erro é exibida quando o usuário não existe.
- Login com Falha (senha incorreta): Verifica se uma mensagem de erro é exibida quando a senha está incorreta.

## Tecnologias Utilizadas
- Cucumber
- Node.js
- Gherkin
- Assert (Biblioteca para realizar as asserções nos testes, garantindo que os comportamentos esperados sejam atendidos)

## Estrutura do projeto
- features/login.feature: Arquivo que descreve os cenários de teste em Gherkin.
- features/step_definitions/steps.js: Arquivo com as definições dos passos dos testes.
- package.json: Arquivo de configuração do Node.js, contendo dependências e scripts para execução dos testes.
