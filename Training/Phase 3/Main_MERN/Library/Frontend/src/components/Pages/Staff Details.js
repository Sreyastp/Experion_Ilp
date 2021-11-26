import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
function StaffDetails() {
  //initialize the use case to empty
  const [staff, setStaff] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3001/staff/${id}`).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setStaff(response.data);
    });
  }, []);

  return (
    <>
      <div className="text-center">
        <h1>Details of {staff.email}</h1>
        <h2>ISBN : {staff.first_name}</h2>
        <h2>Author Name : {staff.last_name}</h2>
        <h2>Title : {staff.email}</h2>
        <h2>Rating : {staff.mobile_no}</h2>
        <a href="/stafflist">Back to Staff List</a>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br> <br></br> <br></br> <br></br>{" "}
    </>
  );
}

export default StaffDetails;
