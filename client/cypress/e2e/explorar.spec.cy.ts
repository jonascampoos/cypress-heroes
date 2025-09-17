describe('testar as funcionalidade do site', () => {
  it('like na figurinha dos heroes', () => {

    cy.visit('http://localhost:3000/heroes')
    cy.get('.gap-8').eq(0).click()
    cy.get('[type=email]').type('test@test.com')
    cy.get('[name=password]').type('test123')
    cy.get('.text-white').click()
    cy.get('[data-cy=like]').eq(2).click()
    cy.get('[data-cy=like]').eq(5).click()

  })
})

describe('testar as funcionalidade do site', () => {
  it('comprar as figurinhas dos heroes', () => {

    cy.visit('http://localhost:3000/heroes')
    cy.get('.gap-8').eq(0).click()
    cy.get('[type=email]').type('test@test.com')
    cy.get('[name=password]').type('test123')
    cy.get('.text-white').click()
    cy.get('[data-cy=money]').eq(2).click()
    cy.get('.text-white').click()
    cy.get('[data-cy=money]').eq(5).click()
    cy.get('.text-white').click()


  })
})


