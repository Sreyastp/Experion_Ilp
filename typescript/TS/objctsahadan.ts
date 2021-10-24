//step 1:common methods out--interface
//deptno---Employee
//order details---customers
interface IPerson{
    //common method
    GetDetails():string;//no implementation
}
//step2-common derived from interface       //implement here
class Person implements IPerson{          
    
    constructor(public aadarCard:number,
        public factName:string,
        public address:string){

        }
    GetDetails():string{
        return this.aadarCard+" "+this.address+" "+this.factName;
    }
}


//steps3-employee/customers--person
class employeeFactory extends Person{
    
    constructor (public aadarCard:number,
        public factName:string,
        public address:string,
        public departmentNo:number)
    {
        super(aadarCard,factName,address);
        
    }
    GetDetails():string{
        return"Employee Details "+super.GetDetails()+" "+this.departmentNo;
    }
}
class customerFactory extends Person{
    
    constructor (public aadarCard:number,
        public factName:string,
        public address:string,
        public orderdetails:string)
    {
        super(aadarCard,factName,address);
        
    }
    GetDetails():string{
        return"Customer Details "+super.GetDetails()+" "+this.orderdetails;
    }
}
//step4-class employee/customers
        //implementing methods
//steps 5-class--MainEntry--options

class Factory{
    //static--singleton //oop we need to hiding implementation
    static GetSomeBody(choice:number):IPerson{
        if(choice==0){
            return new employeeFactory(12345,"Adam","Kozhikode",12);
        }
        else{
            return new customerFactory(1256,"Mariyam","UK","Mobile")
        }

    }
}
//step 6-display result
let someBody=Factory.GetSomeBody(0);
console.log(someBody.GetDetails());