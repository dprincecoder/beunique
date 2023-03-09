import { Route, Routes as Switch } from "react-router-dom";
import Account from "./pages/Account";
import AdminOverview from "./pages/Admin";
import AdminUpload from "./pages/Admin/Upload";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import MyBag from "./pages/MyBag";
import Order from "./pages/Order";
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
      <Route exact path="/my-bag" element={<MyBag />} />
      <Route exact path="/auth/checkout" element={<Checkout />} />
      <Route exact path="/admin" element={<AdminOverview />} />
      <Route exact path="/admin/upload" element={<AdminUpload />} />
      <Route path="/auth/order" element={<Order />} />
    </Switch>
  );
};

export default Routes;
