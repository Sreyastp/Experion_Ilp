let x = 5;
let y = 6;

console.log('x+y=',x+y);
console.log('x-y=',x-y);
console.log('x*y=',x*y);
console.log('x/y=',x/y);
console.log('x%y=',x%y);
console.log('postinc=',++x);
console.log('preinc=',x++);
console.log('exp=',x ** y);
console.log(3!=2);
console.log('hello' != 'Hello') //true
console.log(2 === 2); //true
console.log(2 === '2');
console.log(2 !== '2');
console.log(2 !== 2);
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(!true);
console.log('3'+3);
console.log('3'+ true);
console.log('3'+' '+ undefined);
console.log('3'+ null);
console.log('3'-3);
console.log('3'-'3');
console.log('3'*3);
console.log('3'/3);
let p= 'poda';
let z= 'pule';
console.log(p+z);

//objects
const person ={
    name: 'john',
    age: 20,
};
//acessing property
console.log(person.name); 

// acessing through diff way
console.log(person["age"]);

const student ={
    name: 'sreyas',
    age: 30,
    marks: {
            machine: 100,
            netwok: 100
            }
} 

console.log(student.name);
console.log(student.marks.machine);

//fn inside objects
const person1 ={
    name: 'john',
    age: 20,
    greet:  function() {console.log('hello')}
};
person1.greet();

///dyanmic adding into a onject
let studentt ={  };

studentt.name = 'sreyas'

studentt.greet = function(){
    console.log('hi');
}

studentt.greet();

const numerator = 100, denominator ='a';
 try{
     console.log(numerator/denominator);
     console.log(a);
}

 catch(error){
     console.log('an error caught');
     console.log(' error message' + error);



 }

 finally{
     console.log('finally will execute every time');
 }


 //assigning object attribute sto variables
 const personnn ={
     name: 'sreyas',
 }



 //destructuring
 let {name:name1,age:age1,gender:gender1}=personnn;
 console.log(name1);
 console.log(age1);
 console.log(gender1);

 //array destrcucturing
 const arrValue =['one','two','three'];

 //destrcuturing array

 const [xx,yy,zz] = arrValue;

 console.log(xx);
 console.log(yy);
 console.log(zz);




 //object desctruuring

 const persson ={
     name11:'jack'
 }

 const {name11,age =26} =persson;
 console.log(name11)
 console.log(age)

 const arrValue1=['one ','two','three'];

 //destructuring
 const[x1, , z1]= arrValue1;
 console.log(x1);
 console.log(z1);


 class user11{
     _name="";
     constructor(name)
     {
         this._name =name
     }
     sayHi()
     {
         console.log(this._name);
     }
 }
 var user2 = new user11("poda");
 user2.sayHi();






 class Point {
     constructor(x,y){
         this.x=x
         this.y=y
     }
     static distance(a,b){
         const dx = a.x -b.x;
         const dy =a.y -b.y;
         return Math.hypot(dx,dy);
     }
 }

 const p1 = new Point(5,5);
 const p2 = new Point(10,10);
 console.log(p1.distance)
    console.log(p2.distance)

console.log(Point.distance(p1,p2));

//class
// Class Inheritance in JavaScript
class Animal {
	constructor(name) {
		this.name = name;
	}
	eats() {
		return `${this.name} eats Food`;
	}
}

class Dog extends Animal {
	constructor(name, owner) {
		super(name);
		this.owner = owner;
	}
	eats() {
		return `${this.name} eats Chicken`;
	}
}

let myDog = new Dog("Spot", "John");
console.log(myDog.eats()); // S



class Animals {
constructor(name){
    this.name=name;
}
speak(){
    console.log(`${this.name} makes a noise`);
}
}

class Dog1 extends Animals {
    constructor(name){
        super(name);
        }
        barks(){
            console.log(`${this.name} barks.`);
        }
    }

    let d = new Dog1('pug');
    d.barks();
    d.speak();


    function multiply(a,b =1){
        return a*b;
    }

    console.log(multiply(2,5));

    console.log(multiply(5));





    //day 2

    var x= 1;
    let y= 1

    if (true){
        var x =2;
        let y =2;
    }

    console.log(x);
    console.log(y);




//break
let i = 0;

while (i <6){
    if (i===3){
        break;
    }
    i= i+1
}
console.log(i);  //op 3


//for statement

let str= '';

for(let i = 0; i< 9;i++){
    str=str + i;
}
console.log(str);
//op 012345678



//\alternative forstatement valid aan ithoke 
var  i =0;
for(; i<9; i++){
    console.log(i);
}


for(let i = 0;; i++){
    console.log(i)
    if(i>3)break;
}


var i=0;

for(;;){
    if(i>3)break;
    console.log(i);
    i++
}


function reverseArr(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

var a = [3,5,7,8]
var b = reverseArr(a);