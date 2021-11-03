/*
//make changes in ts config.json
// - "target": "es5"
// - "module": "es2015"

//step 1-details of the employee
interface Employee{
    id:number
    email:string
    first_name:string
    last_name:string
    avatar:string
}

//step 2- declare webapi - endpoints
const baseApi='https://reqres.in/api/users?page=1'
const userApi='https://reqres.in/api/user'

//step 3 fetch all employees
const fetchAllEmployees=
    async (url: string):Promise<Employee[]> => {
      const response =  await fetch(url)
        const {data} = await response.json()
        return data

    }
//step 4- fetch an employee
const fetchEmployee =
    async(url: string, id:number): Promise<Record<string,string>> =>{
        const response =  await fetch(`${url}/${id}}`)
        const {data} = await response.json()
        return data


    }

//step 5 - run Async-Promise-Await Functions
const runAsyncFunctions = async()=>{
    //exception handling
    try{
            const employees = await fetchAllEmployees(baseApi)
            Promise.all(
                employees.map(async user=>{
                    const userName = await fetchEmployee(userApi,user.id)
                    console.log(userName)
                    return userName
                })
             
            )
    }
    catch(error){
        console.log(error)
    }
}

runAsyncFunctions()

*/

//make changes in tsconfig.json
// -"target" : "es6"
// -"module": "es2015"

//step 1 - details of the employee
interface Employee{
    id:number
    email:string
    first_name:string
    last_name:string
    avatar:string
}


//step 2 - decalre webapi - endpoints
const baseApi='https://reqres.in/api/users?page=1'
const userApi ='https://reqres.in/api/user'

// step 3 - fetch all employee
const fetchAllEmployees = async (url:string): Promise<Employee[]> => {
    const response = await fetch(url)
    const { data }= await response.json()    
    return data
}

//step 4 -Fetch an employee
const fetchEmployee =
async(url : string , id : number):Promise<Record<string,string>> => {
    const response = await fetch(`${url}/${id}`)
    const { data }= await response.json()    
    return data
}

// step 5 - GenerateEmail

// step 6 - run async -promise- await functions
const runAyncFunctions = async() =>{

   //exception handling
   try{
        const employees = await fetchAllEmployees(baseApi)
        Promise.all(
            employees.map(async user => {
                const userName = await fetchEmployee(userApi,user.id)
                console.log(userName)
                return userName
            })
            
        )
   } 
   catch(error){
       console.log(error)
   }
}

runAyncFunctions()