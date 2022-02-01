// init_test_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import HomePage from '../support/page_objects/HomePage';
import FindOwnersPage from '../support/page_objects/FindOwnersPage';
import AddOwnerPage from '../support/page_objects/AddOwnerPage';
import owners from '../fixtures/owners';

before(()  =>  {     
    cy.server()
})

describe('Add new owner', () => {
    const homePage = new HomePage();
    const findOwnersPage = new FindOwnersPage();
    const addOwnerPage = new AddOwnerPage();

    it('Go to add owner form', () => {         
        cy.visit('/') //  Visit the page at root -> /

        homePage.getHomeFindOwnersButton().click();

        // should be on the 'find owners page'
        homePage.getFindOwnerPageTitle()
            .should('contain',  'Find Owners');
            
        findOwnersPage.getAddOwnerButton().click();

        // should be on the form to submit new owner
        addOwnerPage.getSubmitOwnerButton().should('contain', 'Add Owner');
    }) 
    

    it('Adding new owner is possible', () => {
        const ownerObject = {
            'first' : "meno",
            'last' : "priezvisko",
            'city' : "nadasdsad",
            'address' : "dasdad as dsd",
            'phone' : "0901312",
        };
        cy.visit('/owners/new');
        addOwnerPage.getFirstNameInput().type(ownerObject.first);
        addOwnerPage.getLastNameInput().type(ownerObject.last);
        addOwnerPage.getCityInput().type(ownerObject.city);
        addOwnerPage.getAddressInput().type(ownerObject.address);
        addOwnerPage.getTelephoneInput().type(ownerObject.phone);

        addOwnerPage.getSubmitOwnerButton().click();


        addOwnerPage.getOwnerInformation()
            .should('contain', 'Owner Information');

        addOwnerPage.getOwnerAddress()
            .should('contain', ownerObject.address);
    }) 

    it('Adding multiple owners', () => {

        cy.fixture('owners').then((owners) => {
            owners.forEach((owner) => { 
                cy.visit('/owners/new');
                addOwnerPage.getFirstNameInput().invoke('val', owner.first_name); 
                addOwnerPage.getLastNameInput().invoke('val', owner.last_name) 
                addOwnerPage.getCityInput().invoke('val', owner.city)
                addOwnerPage.getAddressInput().invoke('val', owner.address)
                addOwnerPage.getTelephoneInput().invoke('val', owner.phone)
        
                addOwnerPage.getSubmitOwnerButton().click();
        
                if (owner.err === 1) {
                    addOwnerPage.getCityInput() // is still on same page - not submited
                        .should('have.value', owner.city);
                } else {
                    cy.get('body > div > div > h2:nth-child(1)') // if object was correct -> will move to the different page
                        .should('contain', 'Owner Information');
                }
            })
        });

    }) 

    it('Creation will not happen with number longer than 10', () => {
        const ownerObject = {
            'first' : " dadsa dd sad",
            'last' : "asd adasd a",
            'city' : "sdaa dasd",
            'address' : "dlaijd wqdqwdq",
            'phone' : "0987654321012",
        };
        cy.visit('/owners/new');

        addOwnerPage.getFirstNameInput().type(ownerObject.first);
        addOwnerPage.getLastNameInput().type(ownerObject.last);
        addOwnerPage.getCityInput().type(ownerObject.city);
        addOwnerPage.getAddressInput().type(ownerObject.address);
        addOwnerPage.getTelephoneInput().type(ownerObject.phone);

        addOwnerPage.getSubmitOwnerButton().click();

        // error is raised when the number is longer than 10 numeric chars
        addOwnerPage.getErrorMessage()
            .should('contain', 'číselná hodnota je mimo rozsahu (očakávané <10 číslic>.<0 číslic>)');
    }) 

})

