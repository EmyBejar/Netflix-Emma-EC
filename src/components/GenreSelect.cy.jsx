import React from 'react'
import GenreSelect from './GenreSelect'

describe('<GenreSelect />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<GenreSelect />)
  })
})