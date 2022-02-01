class HomePage {
    getHomePageButton() {
        return cy.get('#main-navbar > ul > li:nth-child(1) > a');
    }
    getHomeFindOwnersButton() {
        return cy.get('#main-navbar > ul > li:nth-child(2) > a')
    }
    getHomeVeterinariansButton() {
        return cy.get('#main-navbar > ul > li:nth-child(3) > a  ')
    }
    getHomeErrorsButton() {
        return cy.get('#main-navbar > ul > li:nth-child(4) > a')
    }
    getFindOwnerPageTitle(){
        return cy.get('body > div > div > h2');
    }
}
export default HomePage