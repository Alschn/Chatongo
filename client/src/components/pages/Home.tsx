import "./Home.scss";
import { FC } from "react";
import logo from "../../static/logo.svg";

const Homepage: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a href="/#login" className="App-link">
          Login
        </a>
        <a href="/#register" className="App-link">
          Register
        </a>
      </header>
    </div>
  );
};

export default Homepage;
