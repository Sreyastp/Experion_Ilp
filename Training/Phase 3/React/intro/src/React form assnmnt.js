import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <MyForm />
      <br></br>
      <LOGIN />
      <br></br>
      <CDetails />
    </>
  );
}

function MyForm() {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div class="container-fluid">
      <h2 class="h3 text-black text-center bg-warning">
        Office Staff Registration Form
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label> Enter your Email :</label>
          <input
            type="email"
            class="form-control"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your Password :</label>
          <input
            class="form-control"
            type="password"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Confirm your Password :</label>
          <input
            type="password"
            class="form-control"
            name="Cpassword"
            value={inputs.Cpassword || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your First Name :</label>
          <input
            type="text"
            class="form-control"
            name="Fname"
            value={inputs.Fname || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your Last Name :</label>
          <input
            type="text"
            class="form-control"
            name="Lname"
            value={inputs.Lname || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your Mobile Number :</label>
          <input
            type="tel"
            class="form-control"
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Date of Joining :</label>
          <input
            class="form-control"
            type="date"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <input type="Submit" class="form-control btn btn-primary mt-3" />

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

function LOGIN() {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="container-fluid">
        <h2 class="h3 text-black text-center bg-warning">
          Office Staff Login Form
        </h2>
        <div>
          <label> Enter your Email :</label>
          <input
            class="form-control"
            type="email"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your Password :</label>
          <input
            type="password"
            class="form-control"
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <input type="submit" class="form-control btn btn-primary mt-3" />
        </div>
      </div>
    </form>
  );
}

function CDetails() {
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <div class="container-fluid">
      <form onSubmit={handleSubmit}>
        <h2 class="h3 text-black text-center bg-warning">
          Office Details Entry Form
        </h2>
        <div>
          <label> Enquiry Date :</label>
          <input
            type="date"
            class="form-control"
            name="edate"
            value={inputs.edate || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your First Name :</label>
          <input
            type="text"
            class="form-control"
            name="Fname"
            value={inputs.Fname || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your Last Name :</label>
          <input
            class="form-control"
            type="text"
            name="Lname"
            value={inputs.Lname || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Enter your Age :</label>
          <input
            type="text"
            name="age"
            class="form-control"
            value={inputs.age || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Date of Birth :</label>
          <input
            class="form-control"
            type="date"
            name="bdate"
            value={inputs.bdate || ""}
            onChange={handleChange}
          />
        </div>

        <div>
          <label> Highest Qualification: :</label>
          <select
            class="form-control"
            name="qfn"
            value={inputs.qfn || ""}
            onChange={handleChange}
          >
            <option value="BTECH"> B-TECH</option>
            <option value="MTECH">M-TECH </option>
            <option value="PLUS TWO">PLUS TWO </option>
          </select>
        </div>

        <div>
          <input class="form-control btn btn-primary mt-3" type="Submit" />

          <input
            class="form-control btn btn-danger mt-3"
            type="reset"
            value="Cancel"
          />
        </div>
      </form>
    </div>
  );
}

export default App;

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
