import React from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
// import DeleteStaff from "./Staffdelete";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function Staff(props) {
  console.log(props);
  const navigate = useNavigate();
  const deleteStaff = (id) => {
    return axios
      .delete(`http://localhost:3001/staff/${id}`)
      .then((response) => console.log("Delete Successful"))
      .catch((error) => console.log("Error using delete operation"));
  };

  const pic = {
    height: 200,
    width: 130,
  };

  return (
    <>
      <div className="container-fluid">
        <h4>Title: {props.details.email}</h4>
        <img
          style={pic}
          src="https://www.imagebee.org/misc/book-cover/book-cover-1-1725x2625.jpg"
          alt="book1 "
        />
        <br></br>
        <br></br>

        <Link
          className="btn btn-warning mb-2 ms-2"
          to={`/staffdetails/${props.details.id}`}
        >
          View Details
        </Link>
      </div>

      {/* <button
        className="btnList btnA"
        onClick={() => deleteStaff(props.details.id)}
      >
        Delete Staff
      </button>
      <button
        className="btnList btnB"
        type="button"
        onClick={() => navigate(`/staffedit/${props.details.id}`)}
      >
        Edit User
      </button> */}
    </>
  );
}
export default Staff;
