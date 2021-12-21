const Destination = require('./destination')
const Person = require('./person')


describe("The flight destination", () => {

    const testPerson = new Person('randomPassenger', 'passenger'); 
    testPerson.destination = 'Seattle'; 

    const flightDestination = new Destination('Seattle'); 

    test('if flight destination matches passengers destination', () => {
        expect(testPerson.destination == flightDestination.location).toBeTruthy()
    })
})