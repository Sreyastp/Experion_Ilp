const person = {
    name : 'John',
    age : 20
}

//accessing property
console.log(person.name);

const person1 = {
    name: 'John',
    age : 20
}

//accessing property
console.log(person1["name"]);   //alternate way instead of using dot - index accessing

//nested object
const student = {
    name : 'John',
    age : 20,
    marks: {
        science :70,
        math : 75
    }
}

//accesssing property of student object
console.log(student.marks);

//accessing property of marks object
console.log(student.marks.science);



//Method addition n

const person2 = {
    name : 'Sam',
    age : 30,
    //using function as a value
    greet : function() {
        console.log('Helloo')
    }
}


person2.greet(); //Hello


//You can also add a method in an obejct. Eg.

//creating an object
let student1 ={ };

//adding a property
student1.name = 'John';

//adding a method
student1.greet = function(){
    console.log('hello')
}

student1.greet(); //hello


//To acess a property of an object from within a method of the same object,
// use "this" keyword

const person4 = {
    name : 'John',
    age : 30,

    //accessing name property by using this.name
    greet: function(){
        console.log("The name is" +' '+this.name);
    }
}

person4.greet();

/////////////////
//new keyword can be used for creating class objects as well as function objects

//Create multiple obejects with constructor func

//constructor func
function person5() {
    this.name = 'John',
    this.age = 30,

    //accessing name property by using this.name
    this.greet = function(){
        console.log("Hello");
    }
}
//create objects
const employee1 = new person5();
const employee2 = new person5();

//access properties
console.log(employee1.name);
console.log(employee2.name);

//dynamic function create  a constructor func with parameter
//you can also create 

function person6(person_name,person_age,person_gender){
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function(){
        return ('Hi'+' '+this.name+' , Nice to meet u');
    }
}

//creating obejcts
const employee3 = new person6('Sam',23,'male');
const employee4 = new person6('Naina',36,'female');

//accessing properties
console.log(employee3.greet());
console.log(employee4.name);