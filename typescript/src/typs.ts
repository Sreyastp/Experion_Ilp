/*console.log("Hello");

//declare varialbles
//function
function add(numberOne:number,numberTwo:number){
    return numberOne + numberTwo
}

if(typeof numberOne !== 'number' || typeof numberTwo !== 'number')
{
    throw new Error('error message');
}

const  numberOne = 5;
const numberTwo = 9;

const result = add(numberOne,numberTwo);

console.log(result)





const result */
//mars
function marsdistance(speedkmph: number, distancekm: number) {
    const timeToMarshrs = distancekm / speedkmph;
    const timetomarsdays = timeToMarshrs / 24;
    return timetomarsdays

}
function moondistance(speedkmph: number, disttomoonkm: number) {
    const timeTomoonhrs = disttomoonkm / speedkmph;
    const timetomoonsdays = timeTomoonhrs / 24;
    return timetomoonsdays

}


//mars
const shuttleName = 'Determination';
const distancekm = 225000000;
const speedmph = 17500;
const speedkmph = speedmph * 1.6;
//moon
const disttomoonkm = 38400;



console.log(marsdistance(speedkmph, distancekm));
console.log(moondistance(speedkmph, disttomoonkm));





let engineIndicatorLight ="red blinking";
let spaceSuitsOn = "true";
let shuttleCabinReady = "true"

let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

if(engineIndicatorLight === "green"){
    console.log("engine ON");
}
else if(engineIndicatorLight === "green blinking"){
    console.log("ENgine is preparing");
}
else{
    console.log("engines are off")
}

if(crewStatus){
    console.log("crew ready");
}
else{
    console.log("crew not ready")
}


let value = 200;

    if(value === 200){
        console.log("Please stand by . computer is rebooting");
    }
    else if(value ===400){
        console.log("Sucess! computer online");
    }
    else{
        console.log("Alert: computer offline")
    }


let value1 = 20000;

    if(value1 > 17500){
        console.log("Alert: Escape velocity reached");
    }
    else if(value1 < 8000){
        console.log("Alert: cannot maintain orbit");
    }
    else{
        console.log("Stable speed")
    }




/*

    
    if(fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight==="red blinking") {
        console.log("Engine Failure imminent");
    }
    else if(fuelLevel <= 5000 || engineTemperature > 2500){
        console.log("Check fuel level engine runninhg hot");
    }
    else if(FuelLevel > 20000 && engineTemperature <= 2500 ){
        console.log("Alert: cannot maintain orbit");
    }
    else if(fuellevel < 8000){
        console.log("Alert: cannot maintain orbit");
    }
    else if(value1 < 8000){
        console.log("Alert: cannot maintain orbit");
    }
    else if(value1 < 8000){
        console.log("Alert: cannot maintain orbit");
    }
    else{
        console.log("Stable speed")
    }

    */

    //const ADMIN = 0;
    //const READ_ONLY = 1;


    /*

    //ENUM
    enum Role {ADMIN ,USER ,GUEST ,CORDINATOR,MANAGER}


    let employee={
        name: 'Sreyas',
        age: 23,
        hobbies:['Gaming','triping','cool'],
        role:[2,'author']
        
    }

    console.log(employee)
    console.log(employee.name)
    console.log(employee.age)

    let movies : string[] ;
    movies=['gun','val','man']


    //for
    for(let hobby of employee.hobbies){
        console.log(hobby.toUpperCase)
    }

    //
    function greetPerson(name:string){
    if(name === 'Sreyas'){
        var greet = "Hello Sreyas"
    }
    else{
        var greet="hi there"
    }
    console.log(greet)

    }

    greetPerson("Sreyas");




for(let i=1; i<5; i++){
    setTimeout(function(){console.log(i);} ,1000 );
}





/*

let person={
    id=100,
    greet: function(){
        setTimeout(() => {
            console.log(this.id);
        },1000);
    }
}


person.greet(); // entho errror und



*/


/*

//call back function

let percentBonus = () => 0.1;

let getValue = function(value=10,bonus=value*percentBonus()){
    console.log(value+bonus);
    console.log(arguments.length)
};

getValue();
getValue(10);
getValue(20,30);
getValue(undefined,30);




//list of color

let  displayColors =function(message:any,colors:any){
console.log(message);
console.log(colors);

for(let color in colors){
    console.log(colors[color]);
}

}

let message = "list of colors";

displayColors(message ,'');
displayColors(message,'red');

*/


//named functions
function myFunctions(x: number): number{
    return x*5
}

console.log(myFunctions(5));

let y: number=10;
// declaration (y: number) : return type
function myFunctions1(y: number): void{
  let  z=y*66;
  console.log(z);
  return
}
console.log(myFunctions1(5));

//Anonymouss Functions---------unknown
let myFunction2=function(a:number) :number{
    return a*100
}
console.log(myFunction2);

//optional parameters
function optionalfn(f: number,g: number){
//2 parameters
return f+g;
} 
console.log(optionalfn(5,10))


function optionalfn1(f: number,g?: number){
    //2 parameters
  

    if(typeof g !=='undefined'){
        return f+g+5;
    }
    else{
        return f+g;
    }


    } 
    console.log(optionalfn(5,10))
    




//classssss

class vehicles{
    //properties
    engineconfig: string | undefined;
    name: string


    //constructor
    constructor(twostroke:string,){
        this.engineconfig="twostroke";
        this.name="v8"
    }

    //methods
    hitthegas(){
        return "ready to race "
    }


}


//object creation-----instantiation 


let s =  new vehicles("Rtr")

console.log(s);
console.log(s.engineconfig)
console.log();


//inheritance -------
class sedan extends vehicles{
//properties
sports? :string

}








 /////hatch
class hatch extends vehicles{



}

//syntax

interface interfaceName{
    someProperty: number
}

class className implements interfaceName{

    //propetries
    constructor(x: number){
        this.someProperty=x;

    }
    someProperty : number;
}
