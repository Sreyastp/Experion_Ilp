import axios from "axios";

function RegistrationLogic(email, password, first_name, last_name, mobile_no) {
  var data = JSON.stringify({
    email: email,
    password: password,
    first_name: first_name,
    last_name: last_name,
    mobile_no: mobile_no,
    // "date_of_joining": "02-dsf02-2021"
  });

  var config = {
    method: "post",
    url: "http://localhost:3002/staffs",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default RegistrationLogic;
