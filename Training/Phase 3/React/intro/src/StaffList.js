import { useEffect } from "react";

const fetchStaffList = () => {
  return fetch("http://localhost:3002/Staff_list")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

function StaffList() {
  useEffect(() => {
    console.log("The use effect hook has been executed");
    setTimeout(() => {
      fetchStaffList();
    }, 5000);
  }, []);

  return (
    <>
      <div>
        <h1>Staff List</h1>
      </div>
    </>
  );
}
export default StaffList;
