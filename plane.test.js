const Plane = require('./Plane');
const Person = require('./Person');

describe('Plane Class', () => {

	const testPlane = new Plane('B500',2);

    const person1 = new Person('Stanley',"pilot");
    const person2 = new Person('Diana',"co-pilot");
    const person3 = new Person('Rene',"flight Attendent");

	test('has a flight #', () => {
		expect(testPlane.flightNumber).toBe('B500');
	})


	test('can have Passengers', () => {
		testPlane.addPassenger(person1);
		testPlane.addPassenger(person2);
        testPlane.addPassenger(person3);

		expect(Array.isArray(testPlane.passengers)).toBeTruthy();
		expect(testPlane.passengers.length).toBe(3)
		expect(testPlane.passengers[0].name).toBe('Stanley')
	})

	test('is within capacity', () => {
		//console.log("capacity,",testPlane.passengers.length,testPlane)
		//console.log("**",((testPlane.passengers.length < testPlane.capacity)))
		expect((testPlane.passengers.length < testPlane.capacity)).toBe(false);
	})
})

/*
const testPlane = new Plane('B500',2);

const person1 = new Person('Stanley',"pilot");
const person2 = new Person('Diana',"co-pilot");
const person3 = new Person('Rene',"flight Attendent");

    testPlane.addPassenger(person1);
	testPlane.addPassenger(person2);
    testPlane.addPassenger(person3);

console.log(testPlane.passengers.length);
console.log(testPlane.capacity);
console.log(testPlane.passengers.length < testPlane.capacity)
*/