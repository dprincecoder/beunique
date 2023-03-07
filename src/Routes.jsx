import { Route, Routes as Switch } from "react-router-dom";
import Account from "./pages/Account";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import MyBag from "./pages/MyBag";
import Signin from "./pages/SignIn";
import SignUp from "./pages/SignUp";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={<Home />} />;
      <Route exact path="/auth/signin" element={<Signin />} />
      <Route exact path="/auth/signup" element={<SignUp />} />
      <Route exact path="/products" element={<Category />} />
      <Route exact path="/auth/account" element={<Account />} />
      <Route path="/my-bag" element={<MyBag />} />
      <Route path="/auth/checkout" element={<Checkout />} />
    </Switch>
  );
};

export default Routes;
