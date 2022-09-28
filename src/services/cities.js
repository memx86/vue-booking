import axios from "./axios";

const getCities = async () => {
  const { data } = await axios.get("/cities");
  return data;
};

export { getCities };
