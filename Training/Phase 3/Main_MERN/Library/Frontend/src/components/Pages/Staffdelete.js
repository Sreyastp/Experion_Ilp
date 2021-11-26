import axios from "axios";
import { useParams } from "react-router-dom";

function DeleteStaff(props) {
  const { id } = useParams();
  alert("User Details were updated!");
  return axios
    .delete(`http://localhost:3001/staff/${props.id}`)
    .then((response) => console.log("Delete Successful"))
    .catch((error) => console.log(error));
}

export default DeleteStaff;
