import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function LOG() {
  return (
    <>
      <LOGIN />
      <br></br>
    </>
  );
}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

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
      <div class="container-fluid col-md-11">
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
export default LOG;
