class FindOwnersPage {
    getLastNameInput() {
        return cy.get('#lastName');
    }
    getFindOwnerButton() {
        return cy.get('#search-owner-form > div:nth-child(2) > div > button')
    }
    getAddOwnerButton() {
        return cy.get('#search-owner-form > a')
    }
}
export default FindOwnersPage