import "./RegistrationForm.css";

import { useState } from "react";
import RegistrationLogic from "./RegistrationLogic";

function RegistrationForm() {
  //initialize to empty
  const [inputs, setInputs] = useState({});

  //handle the change of form elements
  function handleChange(event) {
    //saving the name of element and its value
    const name = event.target.name;
    const value = event.target.value;

    //updating the values into the state
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit() {
    console.log(inputs);

    RegistrationLogic(
      inputs.useremail,
      inputs.userpassword,
      inputs.userfirstname,
      inputs.userlastname,
      inputs.userpassword
    );
  }

  return (
    <div className="mainBody">
      <div className="row">
        <label>Enter your Email: </label>
        <input
          type="email"
          name="useremail"
          id="email"
          onChange={handleChange}
          value={inputs.useremail || ""}
        />
      </div>

      <div className="row">
        <label>Enter your password: </label>
        <input
          type="password"
          name="userpassword"
          id="password"
          onChange={handleChange}
          value={inputs.userpassword || ""}
        />
      </div>

      <div className="row">
        <label>Confirm password: </label>
        <input
          type="password"
          name="confirmpassword"
          onChange={handleChange}
          value={inputs.confirmpassword || ""}
        />
      </div>

      <div className="row">
        <label>Enter your First Name: </label>
        <input
          type="text"
          name="userfirstname"
          id="firstname"
          onChange={handleChange}
          value={inputs.userfirstname || ""}
        />
      </div>

      <div className="row">
        <label>Enter your Last Name: </label>
        <input
          type="text"
          name="userlastname"
          id="lastname"
          onChange={handleChange}
          value={inputs.userlastname || ""}
        />
      </div>

      <div className="row">
        <label>Enter your Phone: </label>
        <input
          type="number"
          name="phonenumber"
          id="phone"
          onChange={handleChange}
          value={inputs.phonenumber || ""}
        />
      </div>

      <div className="row">
        <label>Date of joining: </label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={inputs.date || ""}
        />
      </div>

      <div className="row">
        <button onClick={() => handleSubmit()} className="btn">
          Add Staff
        </button>
        <button className="btnCancel">Cancel</button>
      </div>
    </div>
  );
}

export default RegistrationForm;
