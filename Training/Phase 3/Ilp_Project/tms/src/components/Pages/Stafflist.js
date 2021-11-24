import { useState, useEffect } from "react";
import axios from "axios";
import Staff from "./Staff";

function StaffList() {
  const [staffs, setStaffs] = useState([]);

  useEffect(() => {
    console.log("The use effect hook has been executed");

    axios.get("http://localhost:3001/staff").then((response) => {
      console.log("promise fulfilled");
      console.log(response);
      //response object contains the complete HTTP REQUEST WITH the
      //returned data, status code, and headers. We need only the 'data'
      setStaffs(response.data);
    });
  }, []);
  return (
    <>
      <div>
        <h1>Staff List</h1>
        <ul>
          {staffs.map((staff) => (
            <li key={staff.user_id}>
              <Staff details={staff} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StaffList;
