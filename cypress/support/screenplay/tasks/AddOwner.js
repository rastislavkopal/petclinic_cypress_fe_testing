import * as AddOwnerPage from '../pages/AddOwnerPage'
// import * as AddATodoItem from '../tasks/AddATodoItem'
import owners_same_last from '../../../fixtures/owners_same_last';

export function withAnEmptySearch() {
    cy.visit(ADD_OWNER_URL)
}

export function withPrecreatedOwner(newOwner) {
    cy.visit(AddOwnerPage.ADD_OWNER_URL)

    cy.get(AddOwnerPage.INPUT_FIRST_NAME).type(newOwner.first);
    cy.get(AddOwnerPage.INPUT_LAST_NAME).type(newOwner.last);
    cy.get(AddOwnerPage.INPUT_ADDRESS).type(newOwner.city);
    cy.get(AddOwnerPage.INPUT_CITY).type(newOwner.address);
    cy.get(AddOwnerPage.INPUT_TELEPHONE).type(newOwner.phone);

    cy.get(AddOwnerPage.SUBMIT_OWNER_BUTTON).click();
}

export function withTwoPrecreatedOwners(lastName) {

    cy.fixture('owners_same_last').then((owners) => {
        owners.forEach((owner) => {
            cy.visit(AddOwnerPage.ADD_OWNER_URL)
            cy.get(AddOwnerPage.INPUT_FIRST_NAME).type(owner.first);
            cy.get(AddOwnerPage.INPUT_LAST_NAME).type(lastName);
            cy.get(AddOwnerPage.INPUT_ADDRESS).type(owner.city);
            cy.get(AddOwnerPage.INPUT_CITY).type(owner.address);
            cy.get(AddOwnerPage.INPUT_TELEPHONE).type(owner.phone);
        
            cy.get(AddOwnerPage.SUBMIT_OWNER_BUTTON).click();
        })
    });

}

