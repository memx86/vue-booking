import axios from "./axios";

const getApartments = async () => {
  const { data } = await axios.get("/apartments");
  return data;
};

const getApartmentById = async (id) => {
  const { data } = await axios.get(`/apartments/${id}`);
  return data;
};

export { getApartments, getApartmentById };
