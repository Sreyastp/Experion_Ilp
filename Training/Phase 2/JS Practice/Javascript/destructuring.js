//before ES6

//assigning object attributes to variables
const person = {
    name :'Sara',
    age : 25,
    gender : 'female'
}

let name= person.name;
let age = person.age;
let gender = person.gender;

console.log(name); //Sara
console.log(age); //25
console.log(gender); //female


//from ES6

//assigning object attributes to variables
const person1 = {
    name1 :'Sam',
    age1 : 35,
    gender1 : 'male'
} 

//destructuring assignment
let {name1,age1,gender1} = person1;

console.log(name1); //Sam
console.log(age1); //35
console.log(gender1); //male




////////////////////////////////////////



//destructuring assignment
//1. using diff variable name
let {name1 : nameOfThePerson,age1 : ageOfThePerson,gender1 :genderOfThePerson} = person1;
console.log(nameOfThePerson); ///Sam
console.log(ageOfThePerson); //35
console.log(genderOfThePerson); //male


//2. Array destructuring
const arrValue = ['one','two','three'];

//destructuring assignments in arrays
const [x,y,z] = arrValue;

console.log(x); //one 
console.log(y); //two
console.log(z); //three


// 3. in object destructuring,you can pass default 

const person2 = {
    name2 : 'Jack'
}

//assign default value 26 to age f undefined
const {name2,age2=26} = person2;

console.log(name2); //Jack
console.log(age2); //26

//4.skip items
const arrValue1 = ['one','two','three']

const [x1, ,z1]= arrValue1 ;
console.log(x1); //one
console.log(z1); //three



//////////////////////////////



//Assigning Remaining elements to a single variable

const arrValue2 = ['one','two','three','four'];

//destruacturing assignment in arrays
//assiging remaining elements to rest

const [x2, ...y2] = arrValue2;
console.log(x2); //one
console.log(y2); //[ 'two', 'three', 'four' ]




//you can also assign the rest of the object properties

const person3 = {
    name3 : 'Pepper',
    age3 : 21,
    gender3 : 'Spices'
}

//destructuring assignment
//assigning remaining properties to rest
let {name3, ...rest} = person3;

console.log(name3); //Pepper
console.log(rest); //{ age3: 21, gender3: 'Spices' }
