const Person = require('./Person')

describe('Person Class', () => {

	const person1 = new Person('Stanley',"pilot");
    const person2 = new Person('Diana',"co-pilot");
    const person3 = new Person('Rene',"flight Attendent");

	test('has a name', () => {
		expect(person1.name).toBe('Stanley');
	})

    test('has a role', () => {
		expect(person2.role).toBe('co-pilot');
	})
})