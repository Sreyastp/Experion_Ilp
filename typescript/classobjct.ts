class Car{
    //field/properties
    engine:string;
    transmission:string;
    noofgears:number;
    fourwheeldrive?: boolean;

    //constructor
    constructor(engine:string,transmission:string, fourwheeldrive:boolean, noofgears:number){
        this.engine=engine
        this.transmission=transmission
        this.fourwheeldrive = fourwheeldrive
        this.noofgears = noofgears
    }

    //function/method
    dispCar(){
        return console.log("The Engine is : " + `${this.engine}` + "Transmission is " + `hh ${this.transmission}` + "having " +
        this.noofgears + "no of Gears and it is fourwheel drive?" + this.fourwheeldrive )
    };

}

//instantiating an object
//object
 
let Ocar = new Car("Over Squared","DCT",true,6)  //object is created

//access the field
console.log("Printing the Details of the car's ENGINE :  " + Ocar.engine);

//access the function
Ocar.dispCar();






//inheritance
class Suv extends Car {
    //properties
    price:number;
    groundClearance:number;


    //constructor
    constructor(price:number,
                groundclearance:number,
                engine:string,
                transmission:string,
                fourwheeldrive:boolean,
                noofgears:number ){    
        
            //// call the constructor of the Parent  class Car:
            super(engine,transmission,fourwheeldrive,noofgears);
        
        this.price = price
        this.groundClearance = groundclearance
       
    }

    //suv function
    dispSuv(){
        console.log("This is an Function in SUV")
    };
}

    //creating an object for the child class car
    let Osuv = new Suv(400000,255,"Mperformance","X-drive",true,8);
    
    //calling the functions of the parent class car 
    console.log(Osuv.dispCar);
    console.log(Osuv.dispSuv);

  
    //interface

    interface IApache{
        //3 properties and 2 methods
        Speed: number;
        accln:string;
        mileage:number;
        //2 methods
        race(track:string):void;
        burntime():number;


    }

    let rtr : IApache = {
        Speed: 130,
        accln: "faster than light",
        mileage: 40,
        race(track: string): void {
            return console.log(track)
        },
        burntime(): number {
          return 100
        }
    }

    let rr: IApache ={
        Speed: 0,
        accln: "lightnig fast",
        mileage: 0,
        race: function (track: string): string {
            return "Ready to Race"
        },
        burntime: function (): number {
            return 1200
        

        }
    }
   
    class implements IApache{
        

    }