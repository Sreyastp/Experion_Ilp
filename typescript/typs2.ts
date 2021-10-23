class employee{
    empName:string;
    aadharNo:number;
    address:string;
    deptNo:number;
    orderdetails:string;

    //constructor
    constructor(name:string,adhrno:number,adrs:string,depno:number,orderdtls:string){
        this.empName = name ;
        this.aadharNo = adhrno;
        this.address = adrs;
        this.deptNo = depno;
        this.orderdetails = orderdtls;
    }

    //fns
    
    getEmpName(): string{
        return this.empName;
        
    }

    getAdhNo(): number{
        return this.aadharNo;
        
    }

    getAddress(): string{
        return this.address;
        
    }

    getDeptNO(): number{
        return this.aadharNo;
        
    }

    getordrdtls():string{
        return this.orderdetails;
    }


}


    //employee object
    let objectemployee = new employee( 'Ramesh', 100 , 'palakkad', 1234, 'ordered a mobile');
    console.log(objectemployee);
    console.log(objectemployee.getEmpName());
    console.log(objectemployee.getAdhNo());
    console.log(objectemployee.getDeptNO());
    console.log(objectemployee.getAddress());
    console.log(objectemployee.getordrdtls());


    //display output
    let empdetails = 0;
    let orderdetails = 1;
    
    

    /// condition for output

    if(empdetails == 1){
        console.log(objectemployee.getEmpName());
        console.log(objectemployee.getAdhNo());
        console.log(objectemployee.getDeptNO());
        console.log(objectemployee.getAddress());

    }
    else if(orderdetails == 0){
        console.log(objectemployee.getordrdtls());

    }