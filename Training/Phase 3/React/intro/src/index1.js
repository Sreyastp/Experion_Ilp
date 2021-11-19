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
    <div class="container-fluid bg-warning">
      <nav class="navbar navbar-expand-md navbar-light pt-5 pb-4">
        <div class="container-xxl">
          <a class="navbar-brand" href="#intro">
            <span class="text-secondary fw-bold">Geo Info Tech</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            aria-controls="main-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end align-center"
            id="main-nav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#topics">
                  lorem
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#reviews">
                  ipsum
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">
                  test
                </a>
              </li>
              <li class="nav-item d-md-none">
                <a class="nav-link" href="#pricing">
                  button
                </a>
              </li>
              <li class="nav-item ms-2 d-none d-md-inline">
                <a class="btn btn-secondary" href="#pricing">
                  click
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Router>
        <h1 class="text-center text-danger ">CRM SYSTEM</h1>
        <h3 class="text-center text-success">
          Training Academy Management System
        </h3>
        <div>
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

        <br></br>
        <br></br>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="container-fluid">
          <footer class="text-center text-lg-start bg-light text-muted">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
              <div class="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>

              <div></div>
            </section>

            <section class="">
              <div class="container text-center text-md-start mt-5">
                <div class="row mt-3">
                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">
                      <i class="fas fa-gem me-3"></i>Company name
                    </h6>
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur
                      adipisicing elit.
                    </p>
                  </div>

                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Products</h6>
                    <p>
                      <a href="#!" class="text-reset">
                        Angular
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        React
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Vue
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Laravel
                      </a>
                    </p>
                  </div>

                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
                    <p>
                      <a href="#!" class="text-reset">
                        Pricing
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Settings
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Orders
                      </a>
                    </p>
                    <p>
                      <a href="#!" class="text-reset">
                        Help
                      </a>
                    </p>
                  </div>

                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                    <p>
                      <i class="fas fa-home me-3"></i> New York, NY 10012, US
                    </p>
                    <p>
                      <i class="fas fa-envelope me-3"></i>
                      info@example.com
                    </p>
                    <p>
                      <i class="fas fa-phone me-3"></i> + 01 234 567 88
                    </p>
                    <p>
                      <i class="fas fa-print me-3"></i> + 01 234 567 89
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div class="text-center p-4">
              © 2021 Copyright:
              <a class="text-reset fw-bold" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </a>
            </div>
          </footer>
        </div>
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
