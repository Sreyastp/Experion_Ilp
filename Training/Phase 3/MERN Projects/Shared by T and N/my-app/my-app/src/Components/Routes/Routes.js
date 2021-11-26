import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import LoginForm from "../Body/Pages/Login/LoginForm";
import RegistrationForm from "../Body/Pages/Registration/RegistrationForm";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Body/Home/Home";

import StaffList from "../Body/Pages/StaffList/StaffList";
import StaffDetails from "../Body/Pages/StaffList/StaffDetails";
import StaffEdit from "../Body/Pages/StaffList/StaffEdit";

function Routers(){

    return(
        <Router>
            <Header />
            
           


            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/staff-list" element={<StaffList />} />
                <Route path="/staffdetails/:id" element={<StaffDetails />} />
                <Route path="/staffedit/:id" element={<StaffEdit />}/>
            </Routes>

            <Footer />
        </Router>


    )
}


export default Routers;


