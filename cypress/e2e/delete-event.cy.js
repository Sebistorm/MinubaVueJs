describe("Create an event", () => {
    it("passes", () => {
        // Load page
        cy.visit("http://localhost:8081/#/events")
        // Click on the first event
        cy.get(".card").first().click()
        // click on delete button
        cy.get(".cy-btnDelete").click()
        // click on confirm in dialog
        cy.get(".cy-btnConfirm").click()
        // Assert: check for the correct page has been loaded
        cy.url().should("include", "/events")
    })
})