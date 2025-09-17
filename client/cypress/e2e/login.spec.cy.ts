describe('logar com suceso', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('.gap-8').eq(0).click()
    cy.get('[type=email]').type('test@test.com')
    cy.get('[name=password]').type('test123')
    cy.get('.text-white').click()

  })
})