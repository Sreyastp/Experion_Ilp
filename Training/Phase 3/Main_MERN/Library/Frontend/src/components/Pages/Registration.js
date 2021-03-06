import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function Register() {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    //to prevent default html form submit behaviour
    event.preventDefault();
    //alert the current state
    console.log(inputs);
    axios.post("http://localhost:3001/staff", inputs).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      window.location = "/StaffList";
    });
  }

  return (
    <div class="container-fluid col-md-11">
      <h2 class="h3 text-black text-center bg-warning">Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Title :</label>
          <input
            type="text"
            class="form-control"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required
          />
        </div>

        {/* <div>
          <label> Confirm your Password :</label>
          <input
            type="password"
            class="form-control"
            name="Cpassword"
            value={inputs.Cpassword || ""}
            onChange={handleChange}
            required
          />
        </div> */}

        <div>
          <label> Author :</label>
          <input
            type="text"
            class="form-control"
            name="last_name"
            value={inputs.last_name || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label> ISBN NO :</label>
          <input
            type="Number"
            class="form-control"
            name="first_name"
            value={inputs.first_name || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Publish Date :</label>
          <input
            class="form-control"
            type="date"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label> Rating :</label>
          <input
            type="text"
            class="form-control"
            name="mobile_no"
            value={inputs.mobile_no || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Upload Photo :</label>
          <input
            class="form-control"
            type="file"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="Submit"
            value="Add Book"
            class="form-control btn btn-primary mt-3 "
          />

          <input
            type="reset"
            class="form-control btn btn-danger mt-3"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
