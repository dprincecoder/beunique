import api from "../axios";

const SignInApi = (data) => {
  let headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Content-Type": "Application/json",
  };
  api.defaults.headers = headers;
  return api.post("/users/login", data);
};

const SignUpApi = (data) => {
  return api.post("/users/create_users", data);
};

const GetUserDetailsApi = () => {
  return api.get("/users/user_detail");
};

export { SignInApi, SignUpApi, GetUserDetailsApi };
