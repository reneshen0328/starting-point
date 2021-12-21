class Security {
	constructor(name,pet,gun){
		this.name = name
        this.pet = pet
        this.gun = gun
        this.police = []
        this.tsa = []
        this.security=[]
	}

    // isTsa(){
    //     if ((this.pet == false|| this.pet == undefined) && (this.gun == false|| this.gun == undefined)) {
    //         return true
    //     } else { 
    //         return false
    //     }
    // }
    
	isWhatRole(){
		if ((this.gun == true) && (this.pet == true)){
            return "is Police"
        } else  if ((this.pet == false|| this.pet == undefined) && (this.gun == false|| this.gun == undefined)){
            return "is TSA"
        } else {
            return "is Security"
        }
	}

    addPolice(){
        if(this.isWhatRole() == "is Police"){
            this.police.push(this.name);
            return this.police;
        } else if(this.isWhatRole() == "is TSA"){
            this.tsa.push(this.name);
            return this.tsa;
        } else {
			 this.security.push(this.name);
			 return this.security; 
		  }
    }
}

module.exports = Security 