import axios from "./axios";

const getApartments = async () => {
  const { data } = await axios.get("/apartments");
  return data;
};

export { getApartments };
