import axios from "./axios";

const getOrders = async () => {
  const { data } = await axios.get("/orders");
  return data;
};

const createOrder = async (payload) => {
  const { data } = await axios.post("/orders", payload);
  return data;
};

export { getOrders, createOrder };
