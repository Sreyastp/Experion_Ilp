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
import Datafetching from "./data fetching axios";
// import StaffLista from "./StaffList using axios";
// import AppFnValidation from "./Validation";

//css styling
const body1 = {
  backgroundColor: "#98B4D4",
  fontFamily: "Arial",
};

//bootstrap css import
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
    <div className="container-fluid" style={body1}>
     
        <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4">
          <div className="container-xxl">
            <a className="navbar-brand" href="#intro">
              <span className="fw-bold">Geo Info Tech</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#main-nav"
              aria-controls="main-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end align-center"
              id="main-nav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#topics">
                    Button 1
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#reviews">
                    Button 2
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Button 3
                  </a>
                </li>
                <li className="nav-item  d-md-none">
                  <a className="nav-link" href="#pricing">
                    Button 4
                  </a>
                </li>
                <li className="nav-item ms-2 d-none d-md-inline">
                  <a className="btn btn-secondary" href="#pricing">
                    Button 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

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

            <Link className="btn btn-primary mb-2 ms-2" to="/stafflogin">
              Staff Login
            </Link>

            <Link className="btn btn-primary mb-2 ms-2" to="/detailsentry">
              Details Entry
            </Link>

            <Link className="btn btn-primary mb-2 ms-2" to="/staffreg">
              Staff Registration
            </Link>

            <Link className="btn btn-primary mb-2 ms-2" to="/staff">
              Stafflist
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
            <Route path="/staff" element={<Datafetching />} />

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

          <div className="container-fluid ">
            <footer className="text-center text-lg-start bg-light text-muted">
              <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                  <span>Get connected with us on social networks:</span>
                </div>

                <div></div>
              </section>

              <section className="">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>Company name
                      </h6>
                      <p>
                        Here you can use rows and columns to organize your
                        footer content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.
                      </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                      <p>
                        <a href="#!" className="text-reset">
                          Angular
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          React
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Vue
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Laravel
                        </a>
                      </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                      </h6>
                      <p>
                        <a href="#!" className="text-reset">
                          Pricing
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Settings
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Orders
                        </a>
                      </p>
                      <p>
                        <a href="#!" className="text-reset">
                          Help
                        </a>
                      </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                      <p>
                        <i className="fas fa-home me-3"></i> New York, NY 10012,
                        US
                      </p>
                      <p>
                        <i className="fas fa-envelope me-3"></i>
                        info@example.com
                      </p>
                      <p>
                        <i className="fas fa-phone me-3"></i> + 01 234 567 88
                      </p>
                      <p>
                        <i className="fas fa-print me-3"></i> + 01 234 567 89
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center p-4">
                © 2021 Copyright:
                <a
                  className="text-reset fw-bold"
                  href="https://mdbootstrap.com/"
                >
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

ReactDOM.render(<App />, document.getElementById("pass"));
