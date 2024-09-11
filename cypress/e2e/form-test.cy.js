
describe('Order Page', () => {
  describe("Error Messages", () => {
    it('Name input throws error for 3 char', () => {
      cy.visit('http://localhost:5173/orderPage')
      cy.get('[data-cy="ad-input"]').type("bah")
      cy.contains("Lütfen geçerli bir ad giriniz.")
    })
    it('Radio Buttons throws error for less than 1 click', () => {
      cy.visit('http://localhost:5173/orderPage')
      cy.get('[data-cy="radio-button"]').check()
      
    })
    it('Select buttons throws error for less than 1 select', () => {
      cy.visit('http://localhost:5173/orderPage')
      cy.get("select").select("ince").should('have.value','ince')
      cy.contains("Lütfen hamur tipini seçiniz.")
    })
    it('Checkboxes throws error for less than 3 checks', () => {
      cy.visit('http://localhost:5173/orderPage')
       for (let k = 0; k < 5; k++) {
         cy.get('[data-cy="checkboxes"]').eq(k).check()
       }
      
      
    })
    it('Button is disabled for unvalidated inputs', () => {
      cy.visit('http://localhost:5173/orderPage')
      cy.get('[data-cy="button-submit"]').should("be.disabled")
      
    })
  })

  describe("Validated inputs", () => {
    it('Button enabled for validated inputs', () => {
      cy.visit('http://localhost:5173/orderPage')
      cy.get('[data-cy="ad-input"]').type("bahadır")
      cy.get('[data-cy="radio-button"]').check()
      cy.get("select").select("ince").should('have.value','ince')
      for (let k = 0; k < 5; k++) {
        cy.get('[data-cy="checkboxes"]').eq(k).check()
      }
      cy.get('[data-cy="button-submit"]').should("not.be.disabled")
    })
    
  })
})