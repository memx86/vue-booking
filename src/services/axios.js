import axios from "axios";
import { useAuthStore } from "../store/auth";
import users from "./users";

import BASE_URL from "../assets/constants/BASE_URL";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

let isRefresh = false;

axiosInstance.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  const token = authStore.token;
  const refreshToken = authStore.refreshToken;

  config.headers["Authorization"] = isRefresh
    ? `Bearer ${refreshToken}`
    : `Bearer ${token}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    if (error.response.status !== 401) return;

    try {
      const originalRequest = error.config;
      isRefresh = true;

      const authStore = useAuthStore();
      const refreshToken = authStore.refreshToken;

      const tokens = await users.refresh(refreshToken);
      if (!tokens) return;

      authStore.setTokens(tokens);

      isRefresh = false;
      return axiosInstance.request(originalRequest);
    } catch (error) {
      console.error(error);
    }
  }
);

export default axiosInstance;
