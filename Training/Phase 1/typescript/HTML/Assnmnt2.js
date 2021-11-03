"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//step 2 - decalre webapi - endpoints
const baseApi1 = 'https://jsonplaceholder.typicode.com/posts';
const userApi1 = 'https://jsonplaceholder.typicode.com/comments';
// step 3 - fetch all employee
const fetchAllEmployees1 = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const { data } = yield response.json();
    return data;
});
//step 4 -Fetch an employee
const fetchEmployee1 = (url, id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${url}/${id}`);
    const { data } = yield response.json();
    return data;
});
// step 5 - GenerateEmail
// step 6 - run async -promise- await functions
const runAyncFunctions1 = () => __awaiter(void 0, void 0, void 0, function* () {
    //exception handling
    try {
        const employees = yield fetchAllEmployees1(baseApi1);
        Promise.all(employees.map((user) => __awaiter(void 0, void 0, void 0, function* () {
            const userName = yield fetchEmployee1(userApi1, user.id);
            console.log(userName);
            return userName;
        })));
    }
    catch (error) {
        console.log(error);
    }
});
runAyncFunctions1();
