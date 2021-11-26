import {useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


function StaffDetails(){
   
    const [staffs, setStaffs] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3002/staffs/${id}`)
              .then(response => {
                  console.log('Promise was fullfilled');
                  console.log(response);
                  setStaffs(response.data)
              })
    }, [])


    return(
        <>
        <h1>Staff Details</h1>
        <h2>First Name: {staffs.first_name}</h2>
        <h2>Last Name: {staffs.last_name}</h2>
        <h2>Mobile No: {staffs.mobile_no}</h2>
        <h2>Email Id: {staffs.email}</h2>
        <br/>
        <Link to={'/staff-list/'}>Go Back</Link><br/>
        </>
    )
}

export default StaffDetails;