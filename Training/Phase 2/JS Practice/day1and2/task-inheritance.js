/*class Animal{
    constructor(legs,speed){
        this.legs = legs;
        this.speed = speed;
    }
    walk(){
        //console.log('Walks on '+this.legs+' legs');
        console.log(`Walks on ${this.legs} legs`);
    }
    fast(){
        //console.log('Got a speed of '+this.speed +' kmph')
        console.log(`Got a speed of ${this.speed} kmph`);
    }
}

class Dog extends Animal{
    constructor(legs,speed){
        super(legs,speed);
    }
    love(){
        console.log('Loves humans a lot')
    }
}


var dog = new Dog(4,30);

dog.walk();
dog.fast();
dog.love();

*/

class Animal{
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }

    barks(){
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Pug');
dog.speak();
dog.barks();