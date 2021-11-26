//hookeffects

import { useState, useEffect } from "react";

function Hooks() {
  const [MyMindState, setMind] = useState("Waiting to update");

  useEffect(() => {
    console.log("executed immediately");

    setTimeout(() => {
      setMind("poda");
    }, 5000);
  }, []);

  return (
    <>
      <h1>My mind is {MyMindState} </h1>
    </>
  );
}

export default Hooks;
