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

    //interfaces with objects
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

    //interface with objects
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
   
    //interfaces wit class
    class rtrcls implements IApache{
        name:string;
        Speed: number;
        accln: string;
        mileage: number;
        race(track: string): string {
           return "just nothing"
        }
        burntime(): number {
            return 3780
        }


       

    //constructor for interface class
    constructor(name:string, Speed:number,accln:string,mileage:number){
        this.name=name;
        this.Speed=Speed;
        this.accln=accln;
        this.mileage=mileage;      
    }
        
    }






    //call backs
   //synchrous
    function addNumber(numOne: number,
        numTwo: number,
        printCb: (l:string, v:any) => void){
    //console.log(numOne+numTwo);
    printCb("result is", numOne+numTwo);
    }


    function prettyPrint(label: string, val: any){
    //output: result is :300
    console.log('-----------');
    console.log(`${label} : ${val}`);
    console.log('-----------');


    }

    addNumber(100,200,prettyPrint);


    //Asynchronous 
    console.log("before");
    setTimeout(()=>
    console.log('Welcome Guys'),2000
    //async //url-- REST API
    //response - accept /reject -- promise
    //await

    );
    console.log("After");