const Security = require('./security')

describe('Security Class', () => {

	const testPerson1 = new Security('Michael', true, true); //POLICE//
	const testPerson2 = new Security("Mose") //TSA//
	const testPerson3 = new Security("Hank", true) //SECURITY//
	const testPerson4 = new Security("Dwight", true, true) //POLICE//
	const testPerson5 = new Security("Stanley") //TSA//

	const testPeople = [testPerson1, testPerson2, testPerson3, testPerson4, testPerson5]; 

	let countPoliceNumb = 0;
	let countTsaNumb = 0;
	let countSecurityNumb = 0;
	
	const totalSecurity = 5;

	
	for(let i = 0; i <= (testPeople.length - 1); i++){
		testPeople[i].addPolice();
	}

	for (let i = 0; i <= (testPeople.length - 1); i++) {
		countPoliceNumb += testPeople[i].police.length
	}
		
	for (let i = 0; i <= (testPeople.length - 1); i++) {
		countTsaNumb += testPeople[i].tsa.length
	}
	
	for (let i = 0; i <= (testPeople.length - 1); i++) {
		countSecurityNumb += testPeople[i].security.length
	}

	test('has a pet', () => {
		expect(testPerson1.pet).toBe(true);
	})

	test('has a gun', () => {
		expect(testPerson1.gun).toBe(true);
	})

	test('security is Tsa', () => {
		expect(testPerson2.isWhatRole()).toBe(true)
	})

	test('is police', () => {
		expect(testPerson1.isWhatRole()).toBe(true)
		expect(testPerson2.isWhatRole()).toBe(false)
	})
	
	test ('add to police', () => {
		// testPerson1.addPolice(); 
		// console.log(testPerson1.police)
		expect(testPerson1.police[testPerson1.police.length-1]).toBe('Michael')
		//expect(testPerson2.addPolice()).toBe("This is not a Police officer :(")
	})

	test("number of the securities",()=>{

		console.log(`police: ${countPoliceNumb}, security: ${countSecurityNumb}, tsa: ${countTsaNumb}, security: ${testPerson1}`)
		// console.log(testPerson1.security)
		
		expect()
	})
}) 