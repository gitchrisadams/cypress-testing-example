describe("Test App.js Loads", function() {
    it("Page should include text, save to reload", function() {
        cy.visit("http://localhost:3000");
        let saveReloadText = cy.get("#my-new-app");
        saveReloadText.should("exist");
    });
});
