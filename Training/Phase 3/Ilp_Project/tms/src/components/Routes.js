import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Registration";
import Nomatch from "./Pages/No Match";
import StaffList from "./Pages/Stafflist";
import StaffDetails from "./Pages/Staff Details";
import StaffEdit from "./Pages/Staff Edit";

function Routers() {
  return (
    <Router>
      <h1 className="text-center  ">CRM SYSTEM</h1>
      <h3 className="text-center ">Training Academy Management System</h3>
      <div>
        <hr />
        <Link className="btn btn-primary mb-2 ms-2" to="/">
          Home
        </Link>

        <Link className="btn btn-primary mb-2 ms-2 " to="/about">
          About Us
        </Link>

        <Link className="btn btn-primary mb-2 ms-2" to="/contact">
          Contact Us
        </Link>

        {/* <Link className="btn btn-primary mb-2 ms-2" to="/detailsentry">
          Details Entry
        </Link> */}

        <Link className="btn btn-primary mb-2 ms-2" to="/stafflogin">
          Login
        </Link>

        <Link className="btn btn-primary mb-2 ms-2" to="/staffreg">
          Register
        </Link>

        <Link className="btn btn-primary mb-2 ms-2" to="/stafflist">
          Staff List
        </Link>
      </div>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stafflogin" element={<Login />} />
        <Route path="/staffreg" element={<Register />} />
        <Route path="/stafflist" element={<StaffList />} />
        <Route path="/staffdetails/:id" element={<StaffDetails />} />
        <Route path="/staffedit/:id" element={<StaffEdit />} />
      </Routes>
    </Router>
  );
}

export default Routers;
