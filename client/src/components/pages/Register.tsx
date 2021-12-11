import axios from "axios";
import React, {FC, useState} from "react";
import {useHistory} from "react-router";
import {API_ROUTE} from "../../config";
import "./LoginRegister.scss";
import {Box, Button, Input, Link} from "@chakra-ui/react";

interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
}

const initialState: RegisterFormInputs = {
  username: "",
  email: "",
  password: "",
};

const Register: FC = () => {
  const history = useHistory();

  const [state, setState] = useState<RegisterFormInputs>(initialState);

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post(`${API_ROUTE}/auth/users/`, {...state})
      .then((response) => {
        console.log(response.data);
        setTimeout(() => history.push("/"), 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box>
      Register <Link href="/#">Back</Link>
      <Box>
        <Input type="text" name="username" onChange={handleChange}/>
        <Input type="text" name="email" onChange={handleChange}/>
        <Input type="password" name="password" onChange={handleChange}/>
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};

export default Register;
