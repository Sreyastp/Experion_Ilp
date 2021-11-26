import { useState } from "react";

function App() {
  return (
    <>
      <MyForm />
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
    <form onSubmit={handleSubmit}>
      <div>
        <label> Enter your Name :</label>
        <input
          type="text"
          name="name"
          value={inputs.name || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label> Enter your Age :</label>
        <input
          type="number"
          name="age"
          value={inputs.age || ""}
          onChange={handleChange}
        />
      </div>

      <div>
        <label> Gender: :</label>
        <select
          name="gender"
          value={inputs.gender || ""}
          onChange={handleChange}
        >
          <option value="Male"> male</option>
          <option value="FeMale">female </option>
        </select>
      </div>

      <div>
        <label> Adress: </label>
        <textarea
          name="adress"
          value={inputs.adress || ""}
          onChange={handleChange}
        >
          Enter Your Adress
        </textarea>

        <div>
          <input type="submit" />
        </div>
      </div>
    </form>
  );
}

export default App;
