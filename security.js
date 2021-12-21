class Security {
	constructor(name,pet,gun){
		this.name = name
        this.pet = pet
        this.gun = gun
        this.police = []
	}

    isTsa(){
        if ((this.pet == false|| this.pet == undefined) && (this.gun == false|| this.gun == undefined)) {
            return true
        } else { 
            return false
        }
    }
    
	isPolice(){
		if ((this.gun == true) && (this.pet == true)){
            return true
        } else {
            return false
        }
	}

    addPolice(){
        if(this.isPolice()==true){
            this.police.push(this.name);
            return this.police;
        } else{
            return "This is not a Police officer :("
        }
    }
}

module.exports = Security 