import * as AddOwner from '../support/screenplay/tasks/AddOwner'
import * as TheOwnersList from '../support/screenplay/questions/TheOwnersList'
import * as TheFoundOwner from '../support/screenplay/questions/TheFoundOwner'
import * as SearchForOwner from '../support/screenplay/tasks/SearchForOwner'

cy.faker = require('faker');

const uniqueOwner = {
    'first' : "meno",
    'last' : "priezvisko",
    'city' : "nadasdsad",
    'address' : "dasdad as dsd",
    'phone' : "0901312",
};

describe('Screenplay - Search for owners', () => {

    it('should be able to go to specific user when lastname is unique', () => {
        uniqueOwner.last = cy.faker.name.lastName();

        AddOwner.withPrecreatedOwner(uniqueOwner)
        SearchForOwner.called(uniqueOwner.last)
        TheFoundOwner.foundUserIs(uniqueOwner);
    })

    it('should be able to add owner and then find him in search', () => {
        const lastName = cy.faker.name.lastName();

        AddOwner.withTwoPrecreatedOwners(lastName)
        SearchForOwner.called(lastName)
        TheOwnersList.sizeIs(2);
    })

    it('Should be able to list multiple after searching empty name', () => {
        const lastName = cy.faker.name.lastName();

//        AddOwner.withPrecreatedOwner("")
        // use default state
        SearchForOwner.withEmptyName()
        TheOwnersList.sizeIs(5);
    })

})