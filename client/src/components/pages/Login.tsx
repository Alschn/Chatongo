import React, {FC, useState} from "react";
import {useHistory} from "react-router";
import AxiosClient from "../../api/axiosClient";
import {API_ROUTE} from "../../config";
import {Box, Button, Input, Link} from "@chakra-ui/react";
import "./LoginRegister.scss";

const Login: FC = () => {
  const history = useHistory();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = (e: React.BaseSyntheticEvent): void => {
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (): void => {
    if (username && password) {
      AxiosClient.post(`${API_ROUTE}/auth/token/login/`, {
        username,
        password,
      })
        .then((response) => {
          console.log(response.data);
          setTimeout(() => history.push("/"), 2000);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box>
      Login <Link href="/#">Back</Link>
      <Box>
        <Input
          type="text"
          value={username}
          id="username"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={password}
          id="password"
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Box>
  );
};

export default Login;
