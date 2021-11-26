import { useState, useEffect } from "react";
import axios from "axios";
import Staff from "./Staff";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

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



    
      <div className="text-center">
        <h1>Books List</h1>
        <ul>
          {staffs.map((staff) => (
            <div key={staff.user_id}>
              <Staff details={staff} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default StaffList;
