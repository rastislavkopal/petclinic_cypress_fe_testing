import { EMPTY_OWNER_SEARCH_URL } from '../pages/FindOwnersPage'
// import * as AddATodoItem from '../tasks/AddATodoItem'

export function withAnEmptySearch() {
    cy.visit(EMPTY_OWNER_SEARCH_URL)
}

// export function withAListContaining() {
//     cy.visit(TODO_MVC_URL)

//     Array.from(arguments).forEach(todoItem => {
//         AddATodoItem.called(todoItem)
//     });
// }