import { Route, Routes as Switch } from "react-router-dom";
import Category from "./pages/Category";
import Home from "./pages/Home";
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />;
      <Route exact path="/auth/signin" element={<Signin />} />
      <Route exact path="/auth/signup" element={<SignUp />} />
      <Route exatc path="/products" element={<Category />} />
    </Switch>
  );
};

export default Routes;
