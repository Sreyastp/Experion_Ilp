import { useState} from "react";

import './LoginForm.css';


function LoginForm(){


    //initialize to empty
    const [inputs, setInputs] = useState({});
  
    //handle the change of form elements
    function handleChange(event){
      //saving the name of element and its value
      const name = event.target.name;
      const value = event.target.value;
  
      //updating the values into the state
      setInputs(values =>({...values, [name]: value}))
    }
  
    function handleSubmit(event){
      //to prevent the default submit behaviour
      event.preventDefault();
      //printitng 
      console.log(inputs);
    }
  
    return(
      <div className="mainBody">
      <form onSubmit = {handleSubmit}>
        <div className="row">
        <label>Enter your Email: </label>
        <input type="email" name="useremail" onChange={handleChange} value={inputs.useremail || ""}/>
        </div>
        
        
        <div className="row">
        <label>Enter password: </label>
        <input type="password" name="userpassword" onChange={handleChange} value={inputs.userpassword || ""}/>
        </div>
  
        <div className="row">
        <input type="submit" value="login" className="btn" onClick={()=> console.log()}/>
        </div>
  
        
  
 
  
      </form>
      </div>
    )
  }
  

export default LoginForm;