import * as User from '../support/screenplay/tasks/EditOwner'
import * as EditOwner from '../support/screenplay/questions/EditOwner'

cy.faker = require('faker');

const oldOwner = {
    'first' : "George",
    'last' : "Franklin",
    'city' : "110 W. Liberty St.",
    'address' : "Madison",
    'phone' : "6085551023",
};

const newOwner = {
    'first' : "Georgito",
    'last' : "Franklinito",
    'city' : "123 Milan, Italy",
    'address' : "Darlin",
    'phone' : "225566213",
};

describe('Screenplay - Search for owners', () => {

    it('User in edit form should have old information', () => {
        User.withDefaultState();
        User.canOpenEditOwnerPage("1");
        EditOwner.canReadOldForm(oldOwner);
    })

    it('should contain updated info', () => {
        User.withDefaultState();
        User.canOpenEditOwnerPage("1");
        User.canTypeNewData(newOwner);
        EditOwner.canSeeUpdatedData(newOwner);
        User.canEditOwnerToOldState(oldOwner);
    })

})