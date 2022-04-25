import '@testing-library/cypress/add-commands';

describe('find* dom-testing-library commands', () => {
    beforeEach(() => {
      cy.visit('localhost:3000')
    })
  
    // Test each of the types of queries: LabelText, PlaceholderText, Text, DisplayValue, AltText, Title, Role, TestId
  
    it('findByLabelText', () => {
      // we are using a cypress add-command findByRole
      cy.findByRole('button', {name: /Login/i}).click()
      console.log(cy.get('#msg1'));
      // we use Cypress native get method here
      cy.get('#msg1').should("have.text","Morning Mary!!")
    })
}
)