const Security = require('./security')

describe('Security Class', () => {

	const testPerson1 = new Security('Dan', true, true);
	const testPerson2 = new Security("Mae")
	const totalSecurity = 5;

	test('has a pet', () => {
		expect(testPerson1.pet).toBe(true);
	})

	test('has a gun', () => {
		expect(testPerson1.gun).toBe(true);
	})

	test('security is Tsa', () => {
		expect(testPerson2.isTsa()).toBe(true)
	})

	test('is police', () => {
		expect(testPerson1.isPolice()).toBe(true)
		expect(testPerson2.isPolice()).toBe(false)
	})
	
	test ('add to police', () => {
		testPerson1.addPolice(); 
		console.log(testPerson1.police)
		expect(testPerson1.police[testPerson1.police.length-1]).toBe('Dan')
		//expect(testPerson2.addPolice()).toBe("This is not a Police officer :(")
	})
}) 