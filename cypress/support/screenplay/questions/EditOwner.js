import * as EditOwner from '../pages/EditOwnerPage'


export function canReadOldForm(oldOwner) {
    cy.get(EditOwner.INPUT_FIRST_NAME).should('have.value', oldOwner.first);
    cy.get(EditOwner.INPUT_LAST_NAME).should('have.value', oldOwner.last);
    cy.get(EditOwner.INPUT_ADDRESS).should('have.value', oldOwner.city);
    cy.get(EditOwner.INPUT_CITY).should('have.value', oldOwner.address);
    cy.get(EditOwner.INPUT_TELEPHONE).should('have.value', oldOwner.phone);
}

export function canSeeUpdatedData(updatedOwner) {
    cy.visit(EditOwner.OWNER_URL + "/1/edit");
    cy.get(EditOwner.INPUT_FIRST_NAME).should('have.value', updatedOwner.first);
    cy.get(EditOwner.INPUT_LAST_NAME).should('have.value', updatedOwner.last);
    cy.get(EditOwner.INPUT_ADDRESS).should('have.value', updatedOwner.city);
    cy.get(EditOwner.INPUT_CITY).should('have.value', updatedOwner.address);
    cy.get(EditOwner.INPUT_TELEPHONE).should('have.value', updatedOwner.phone);
}

