//Generally, it is safer to use strict mode to reduce the probability of this having an unexpected scope.
//Rarely will someone want to refer to the window object using this


function printThis(){
    console.log(this)
}

printThis()


//output without strict gives the global object ;name : node


//////////////////////////////////////////////////////////////////////

'use strict'

function printThis(){
    console.log(this)
}

printThis()

//undefined - output with strict


///////////////////////////////////////////////////////////////////


// A method uses this to refer to the properties of the object
//this is the same as India

const india = {
    name : 'The Country India',
    independenceOn : 1947,

    describe(){
        console.log(`${this.name} got its independece on ${this.independenceOn}`)
    }
}

india.describe()

//The Country India got its independece on 1947

//'this' will refer to the context from 34-41

///////////////////////////////////////////////////////////////////////////




const India = {
    name : 'The Country India',
    independenceOn : 1947,

    details:{
        flag : 'Tricolored',
        currency : 'INR',
        printDetails(){
            console.log(`The flag is ${this.flag} and the currency is ${this.currency}`)
            // here 'this' have only access inside the child not in the parent
        }
    }
}

India.details.printDetails();


//The flag is Tricolored and the currency is INR




/////////////////////////////////////////////////////////////////////////////////


//In this context,this is now bound to the instance of country,which is contained in the india constant(func constant)

function Country(name,independenceOn) {
    this.name = name;
    this.independenceOn = independenceOn,

    this.describe = function() {
        console.log(`${this.name} got its independece on ${this.independenceOn}`)
    }
}

const INDIA = new Country('The Country India',1947)

INDIA.describe()

//The Country India got its independece on 1947





////////////////////////////////////////////////////////////////////////


//this in the describe method refers to the instance of Country(class),ie India ---- this in class have access all over the class


class COUNTRY {
    constructor(name,independenceOn){
        this.name = name
        this.independenceOn = independenceOn
    }
    
    describe(){
        console.log(`${this.name} got its independece on ${this.independenceOn}`)
    }
}

const indiA = new COUNTRY('The Country India',1947)

indiA.describe()

//The Country India got its independece on 1947



///////////////////////////////////////////////////////////////////////////

// this in regular func --- refer entire constant
//this in arrow func  --- refer only current constant

const myNameIs = {
    name : "Pepper Mint",

    regularFunction : function(){
        console.log(this.name)
    },

    arrowFunction : () => {
        console.log(this.name)
    }
}

myNameIs.regularFunction()  //Pepper Mint
myNameIs.arrowFunction()  //undefined