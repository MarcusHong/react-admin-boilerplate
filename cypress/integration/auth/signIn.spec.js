/// <reference types="Cypress" />

describe('로그인 페이지', function() {
  it ('wow', () => {
    cy.visit('/')

    cy.get('input[name=name]').type('master')

    cy.get('input[name=password]').type('string')
    cy.get('button[type=submit]').click()
  })
  it('sets auth when logging in via form submission', function() {
    cy.location('pathname', {timeout: 10000}).should('not.eq', '/login')
  })
})
