import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function REG() {
  return (
    <>
      <MyForm />
    </>
  );
}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

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
    <div class="container-fluid col-md-11">
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

export default REG;
