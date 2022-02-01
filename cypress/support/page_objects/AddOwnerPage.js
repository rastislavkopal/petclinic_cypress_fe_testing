class FindOwnersPage {
    getFirstNameInput() {
        return cy.get('#firstName');
    }
    getLastNameInput() {
        return cy.get('#lastName')
    }
    getAddressInput() {
        return cy.get('#address')
    }
    getCityInput() {
        return cy.get('#city')
    }
    getTelephoneInput() {
        return cy.get('#telephone')
    }
    getSubmitOwnerButton() {
        return cy.get('#add-owner-form > div:nth-child(2) > div > button')
    }
    getErrorMessage(){
        return cy.get('#add-owner-form > div.form-group.has-feedback > div.form-group.has-error > div > span.help-inline');
    }
    getOwnerInformation(){
        return cy.get('body > div > div > h2:nth-child(1)');
    }
    getOwnerAddress(){
        return cy.get('body > div > div > table:nth-child(2) > tbody > tr:nth-child(2) > td');
    }
}
export default FindOwnersPage