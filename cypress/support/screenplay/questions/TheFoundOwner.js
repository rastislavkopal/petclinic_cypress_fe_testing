import { USER_PAGE_FULL_NAME } from '../pages/FoundOwnerPage'


export function foundUserIs(ownerObject) {
    cy.get(USER_PAGE_FULL_NAME).should('contain', ownerObject.first + " " + ownerObject.last);
}
