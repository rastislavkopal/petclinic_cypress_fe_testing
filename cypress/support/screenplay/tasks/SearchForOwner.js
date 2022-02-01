import { FIND_ADD_OWNER_URL, SEARCH_INPUT_LAST_NAME, FIND_OWNER_BUTTON, EMPTY_OWNER_SEARCH_URL } from '../pages/FindOwnersPage'
// import * as AddATodoItem from '../tasks/AddATodoItem'


export function withEmptyName() {
    cy.visit(EMPTY_OWNER_SEARCH_URL);
}

export function called(ownerLastName) {
    cy.visit(FIND_ADD_OWNER_URL);
    cy.get(SEARCH_INPUT_LAST_NAME).type(ownerLastName);
    cy.get(FIND_OWNER_BUTTON).click();
}