import { Route, Routes as Switch } from "react-router-dom";
import Home from "./pages/Home";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />;
    </Switch>
  );
};

export default Routes;
