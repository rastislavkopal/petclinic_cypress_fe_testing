import * as EditOwner from '../pages/EditOwnerPage'

export function withDefaultState() {
}

export function canOpenEditOwnerPage(ownerId) {
    cy.visit(EditOwner.OWNER_URL + "/" + ownerId + "/edit");
}

export function canTypeNewData(ownerObject) {
    cy.get(EditOwner.INPUT_FIRST_NAME).clear().type(ownerObject.first);
    cy.get(EditOwner.INPUT_LAST_NAME).clear().type(ownerObject.last);
    cy.get(EditOwner.INPUT_ADDRESS).clear().type(ownerObject.city);
    cy.get(EditOwner.INPUT_CITY).clear().type(ownerObject.address);
    cy.get(EditOwner.INPUT_TELEPHONE).clear().type(ownerObject.phone);
    cy.get(EditOwner.SUBMIT_EDIT).click();
}

export function canEditOwnerToOldState(ownerObject) {
    cy.get(EditOwner.INPUT_FIRST_NAME).clear().type(ownerObject.first);
    cy.get(EditOwner.INPUT_LAST_NAME).clear().type(ownerObject.last);
    cy.get(EditOwner.INPUT_ADDRESS).clear().type(ownerObject.city);
    cy.get(EditOwner.INPUT_CITY).clear().type(ownerObject.address);
    cy.get(EditOwner.INPUT_TELEPHONE).clear().type(ownerObject.phone);
    cy.get(EditOwner.SUBMIT_EDIT).click();
}

