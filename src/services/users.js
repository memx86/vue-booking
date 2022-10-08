import axios from "./axios";

const register = async (payload) => {
  const { data } = await axios.post("/users/register", payload);
  return data;
};

const login = async (payload) => {
  const { data } = await axios.post("/users/login", payload);
  return data;
};

const current = async () => {
  const response = await axios.get("/users/current");
  return response?.data;
};

const refresh = async () => {
  const response = await axios.get("/users/refresh");
  return response?.data;
};

const logout = async () => {
  await axios.post("/users/logout");
};

export default { register, login, current, refresh, logout };
