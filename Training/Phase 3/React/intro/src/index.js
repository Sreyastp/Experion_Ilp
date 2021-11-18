import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./about us";
import Contact from "./Contact";
import REG from "./Staff reg";
import LOG from "./Staff Login";
import DETAILS from "./Staff details";
import Nomatch from "./Nomatch";
// import AppFnValidation from "./Validation";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function App() {
  return <MyRouter />;
}

function MyRouter() {
  return (
    <div class="container-fluid">
      <Router>
        <h1 class="text-center text-danger ">CRM SYSTEM</h1>
        <h3 class="text-center text-success">
          Training Academy Management System
        </h3>
        <div>
          <br></br>
          <hr />
          <Link class="btn btn-primary mb-2 ms-2" to="/">
            Home
          </Link>

          <Link class="btn btn-primary mb-2 ms-2 " to="/about">
            About Us
          </Link>

          <Link class="btn btn-primary mb-2 ms-2" to="/contact">
            Contact Us
          </Link>

          <Link class="btn btn-primary mb-2 ms-2" to="/stafflogin">
            Staff Login
          </Link>

          <Link class="btn btn-primary mb-2 ms-2" to="/detailsentry">
            Details Entry
          </Link>

          <Link class="btn btn-primary mb-2 ms-2" to="/staffreg">
            Staff Registration
          </Link>
        </div>
        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/staffreg" element={<REG />} />
          <Route path="/stafflogin" element={<LOG />} />
          <Route path="/detailsentry" element={<DETAILS />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>

        <p>Copyright - All Rights Reserved</p>
      </Router>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById("wa"));

// function MyRouter(){
//     return(
// <Router>

// <h1>CrM System   </h1>
// <h3>
//     content
// </h3>

// <div> <Link to "/" >Home</Link> </div>
// <div> <Link to "/about" >About</Link> </div>
// <div> <Link to "/contact" >contact</Link> </div>
// <div> <Link to "/" >Home</Link> </div>
// <div> <Link to "/" >Home</Link> </div>

// <Routes>

//     <Route path="/"element={<Home/>}/>
//     <Route path="/about"element={<About/>}/>
//     <Route path="/contact"element={<Contact/>}/>
//     <Route path="/staffreg"element={<REG/>}/>
//     <Route path="*"element={<Nomatch/>}/>
// </Routes>
// <br></br>

// </Router>
// );
// }

// import Hey from './App1';
// import Heythere from './App2';
// import SClass from './aa pair studentdatasav'

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Hey/>,
//   document.getElementById('tree')
// );

// ReactDOM.render(
//   <Heythere/>,
//   document.getElementById('form')
// );
