import axios from "./axios";

const setToken = (token) => {
  if (!token) {
    axios.defaults.headers.common["Authorization"] = ``;
    return;
  }
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default setToken;
