import { useState, useEffect } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";

const initialValue = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
  dateOfJoining: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const EditUser = () => {
  const [user, setUser] = useState(initialValue);
  const { name, username, email, phone, password, dateOfJoining } = user;
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUsers(id);
    setUser(response.data);
  };

  const editUserDetails = async () => {
    const response = await editUser(id, user);
    history.push("/all");
  };

  const onValueChange = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Edit Information</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">First Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="firstname"
          value={name}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Last Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="lastname"
          value={username}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Email</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="email"
          value={email}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Password</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="password"
          value={password}
          type="passwword"
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Mobile No:</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="phone"
          value={phone}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Date Of Joining</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="dateOfJoining"
          value={dateOfJoining}
          id="my-input"
          aria-describedby="my-helper-text"
        />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => editUserDetails()}
        >
          Edit Staff
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default EditUser;
