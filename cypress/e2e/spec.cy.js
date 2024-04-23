import {faker} from '@faker-js/faker'

describe('Home page', () => {
  it('Login should fail with email and login invalid', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]').type('test@test.com')
    cy.get('[data-testid="senha"]').type('12345')
    cy.get('[data-testid="entrar"]').click()

    cy.get('.alert').contains('Email e/ou senha inválidos')
  })

  it('Register button should be enable to new user', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="cadastrar"]').click()
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('.font-robot').contains('Cadastro')
  })

  it('Register new user with success', () => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.get('[data-testid="nome"]').type(faker.name.firstName())
    cy.get('[data-testid="email"]').type(faker.internet.email())
    cy.get('[data-testid="password"]').type(faker.internet.password(10))
    cy.get('[data-testid="cadastrar"]').click()
  })
})