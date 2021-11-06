class User{
    _name = '';  //its a good practice to define a class variable with _
    constructor(name){
        this._name =name;
    }

    sayHi(){
        console.log(this._name);
    }
}

var user = new User("Pepper");
user.sayHi();