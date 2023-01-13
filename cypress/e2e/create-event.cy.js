describe("Create an event", () => {
    it("passes", () => {
        // Load page
        cy.visit("http://localhost:8081/#/createevent")
        // type informations
        cy.get(".cy-title").type("Kom og få en badeand")
        cy.get(".cy-description").type("Kom og få en badeand nu her på fredag da sådan er super nice. bla bla bla bla blba al")
        cy.get(".cy-location").type("I dit badekar")
        cy.get(".cy-date").type("2023-12-10")
        cy.get(".cy-startTime").type("15:30")
        cy.get(".cy-endTime").type("19:30")
        // click on submit button
        cy.get(".cy-btnSubmit").click();
        // Assert: check for the correct page has been loaded
        Cypress.minimatch('/event/12', '/event/*', {
            matchBase: true,
        })
        cy.url().should("include", "/event/12")
    })
})