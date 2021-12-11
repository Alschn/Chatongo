import {FC} from "react";
import logo from "../../assets/logo.svg";
import {Box, Image, Link, Text} from "@chakra-ui/react";
import "./Home.scss";

const Homepage: FC = () => {
  return (
    <Box className="App">
      <header className="App-header">
        <Image src={logo} className="App-logo" alt="logo"/>

        <Text as="p">
          Edit <code>src/App.js</code> and save to reload.
        </Text>

        <Link href="/#login" className="App-link">
          Login
        </Link>

        <Link href="/#register" className="App-link">
          Register
        </Link>

        <Link href="/#profile/test" className="App-link">
          Profile test
        </Link>
      </header>
    </Box>
  );
};

export default Homepage;
