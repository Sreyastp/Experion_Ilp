import {useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

import Staff from "./Staff";

function StaffList(){


    const [staffs, setStaffs] = useState([]);
    const {id} = useParams();

    useEffect(()=>{
        console.log('The use effect hook has been executed');

        axios
        .get('http://localhost:3002/staffs')
        .then(response =>{
            console.log('Promise fulfilled');
            console.log(response);
            //response object contains the complete HTTP REQUEST with
            //returned data, status code, and headers. We need only 'data'
            setStaffs(response.data);
        })

    }, [])

    return(
        <div className="staffListBox">
            <h1 className="staffListTitle">
                Staff List
            </h1>
            <div className="staffListUL">
                {staffs.map(staff =>
                    <div key={staff.id} className="staffListLI">
                        <Staff details = {staff} />
                    </div>
                    )}
            </div>

        </div>
    )
}

export default StaffList;