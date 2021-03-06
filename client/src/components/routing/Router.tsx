import { FC } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";
import Register from "../pages/Register";

const Router: FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="*" component={PageNotFound} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
