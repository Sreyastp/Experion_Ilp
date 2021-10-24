//part 1 cremaining variables
let kmtomars: number = 225000000;
let kmtomoon: number = 384400;

//part2 





let miles
let speedMph

//part3 
class spacecraft{
    mperkm: number = 0.621;
    name?: string;
    speedMph?: number;

    //constructor
    constructor(name: string,speedMph:number){
        this.name=name;
        this.speedMph = speedMph;
    }


//methods
getDaysToLocation(kilometersaway: number) : void{
    let milesAway: number = kilometersaway* this.mperkm;
    let hours: number = miles / speedMph;
}

}





//part 4 spaceloction
class spaceloction{

    //properties
    kilometersaway: number=0;
    name?: string;


    //constructor
    constructor(name:string, kilometersaway:number){

    }


}