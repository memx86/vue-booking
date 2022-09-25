import axios from "axios";

import BASE_URL from "../assets/constants/BASE_URL";
import setToken from "./setToken";

axios.defaults.baseURL = BASE_URL;

const register = async (payload) => {
  const { data } = await axios.post("/users/register", payload);
  setToken(data.token);
  return data;
};

const login = async (payload) => {
  const { data } = await axios.post("/users/login", payload);
  setToken(data.token);
  return data;
};

const refresh = async (token) => {
  setToken(token);
  const { data } = await axios.get("/users/current");
  return data;
};

const logout = async () => {
  await axios.post("/users/logout");
  setToken();
};

export default { register, login, refresh, logout };
