import { LIST_OWNER_ROW_NAME, LIST_FOUND_OWNERS_TABLE, ROWS_FOUND_OWNERS } from '../pages/FoundOwnerPage'

export function sizeIs(expectedNumberOfTodos) {
    cy.get(LIST_FOUND_OWNERS_TABLE).find('tr').should('have.length', expectedNumberOfTodos)
}

export function contentsHave() {
    Array.from(arguments).forEach(expectedName => {
        cy.get(LIST_OWNER_ROW_NAME).should('contain', expectedName)
    });
}
