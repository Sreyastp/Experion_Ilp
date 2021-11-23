import axios from "axios";
import { useParams } from "react-router-dom";

function DeleteStaff(props) {
  const { id } = useParams();
  return axios
    .delete(`http://localhost:3002/staffs/${props.id}`)
    .then((response) => console.log("Delete Successful"))
    .catch((error) => console.log(error));
}

export default DeleteStaff;
