import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <h1>My Powerfull app</h1>
      <BrowserRouter>
        <Link className="btn btn-primary mb-2 ms-2" to="/login">
          login
        </Link>
        <br></br>
        <Link className="btn btn-primary mb-2 ms-2" to="/register">
          Register
        </Link>
        <br></br>
        <Link className="btn btn-primary mb-2 ms-2" to="/dashboard">
          Dash
        </Link>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/dashboard" exact component={Dashboard} />
      </BrowserRouter>
    </div>
  );
};

export default App;
