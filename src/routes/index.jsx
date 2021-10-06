import Bebidas from "../components/Bebidas";

const { Switch, Route } = require("react-router");
const { default: Casamento } = require("../components/Casamento");
const { default: Confra } = require("../components/Confra");
const { default: Formatura } = require("../components/Formatura");

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Bebidas />
      </Route>
      <Route exact path="/casamento">
        <Casamento />
      </Route>
      <Route exact path="/confra">
        <Confra />
      </Route>
      <Route exact path="/formatura">
        <Formatura />
      </Route>
    </Switch>
  );
};

export default Routes;
