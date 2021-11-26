import { Component } from "react";
import Studdata from "./aa pair Studdataprint";


class SClass extends Component{
    constructor(){
        super();
        this.state = {data:[
        {"Student_Name" : "sreyas" ,
        "Age": 23 ,
        "department" : "Electrical" ,
        "Gender":"Male"
        },
        {"Student_Name" : "Arun" ,
        "Age": 23 ,
        "department" : "Mechanical" ,
        "Gender":"Male"
        },
        {"Student_Name" : "Ash" ,
        "Age": 24 ,
        "department" : "Tech" ,
        "Gender":"Male"
        }
       
        ]};
        }


    render(){
       
        return ( 
        <div>
           <h2>Student Data</h2>
           <ul>
               {this.state.data.map((stud_item,i) => 
               <Studdata key={i} data={stud_item}/>) }
           </ul>
        </div>
        )    
}
}

export default SClass;