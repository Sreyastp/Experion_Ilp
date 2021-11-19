import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Hooks from "./hooks";
import ReactDOM from "react-dom";
import StaffList from "./StaffList";

function App() {
  return <Hooks />;
}

export default App;

ReactDOM.render(<StaffList />, document.getElementById("wa"));
