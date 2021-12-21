class Plane {
	constructor(flightNumber, capacity){
		this.flightNumber = flightNumber
        this.capacity = capacity
		this.passengers = []
	}

	addPassenger(person){
		this.passengers.push(person)
	}
}

module.exports = Plane