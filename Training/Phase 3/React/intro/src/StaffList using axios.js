//destructuring react to get only useState
import { useEffect } from "react";
import axios from "axios";

const fetchStaffList = () => {
  return axios

    .get("http://localhost:3001/staff_list")
    .then((response) => console.log(response.data));
};

function StaffLista() {
  useEffect(() => {
    console.log("The use effect hook has been executed");
    setTimeout(() => {
      fetchStaffList();
    }, 5000);
  }, []);
}
export default StaffLista;
