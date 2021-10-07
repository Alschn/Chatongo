import axios from "axios";
import React, { FC, useState } from "react";
import { useHistory } from "react-router";
import { API_ROUTE } from "../../config";
import "./LoginRegister.scss";

interface RegisterFormInputs {
  username: string;
  email: string;
  password: string;
}

const Register: FC = () => {
  const history = useHistory();

  const [state, setState] = useState<RegisterFormInputs>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.BaseSyntheticEvent) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    axios
      .post(`${API_ROUTE}/auth/users/`, { ...state })
      .then((response) => {
        console.log(response.data);
        setTimeout(() => history.push("/"), 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      Register <a href="/#">Back</a>
      <div>
        <input type="text" name="username" onChange={handleChange} />
        <input type="text" name="email" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Register;
