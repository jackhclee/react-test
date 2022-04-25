import '@testing-library/cypress/add-commands';
//import '@testing-library/jest-dom'

describe('find* dom-testing-library commands', () => {
    beforeEach(() => {
      cy.visit('localhost:3000')
    })
  
    // Test each of the types of queries: LabelText, PlaceholderText, Text, DisplayValue, AltText, Title, Role, TestId
  
    it('findByLabelText', () => {
      cy.get('#btn1').click()
      console.log(cy.get('#msg1'));
      cy.get('#msg1').should("have.text","Morning Mary!!")
    })
}
)