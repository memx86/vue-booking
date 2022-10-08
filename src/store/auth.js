import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

import users from "../services/users";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: "",
  refreshToken: "",
};

const toast = useToast();

export const useAuthStore = defineStore("auth", {
  state: () => ({ ...initialState }),
  persist: {
    paths: ["token", "refreshToken"],
  },
  actions: {
    setTokens({ token, refreshToken }) {
      this.token = token;
      this.refreshToken = refreshToken;
    },
    async register(creds) {
      try {
        this.isLoading = true;
        const { token, refreshToken } = await users.register(creds);
        this.setTokens({ token, refreshToken });
        this.isLoggedIn = true;
        return true;
      } catch (error) {
        toast.error("Can't register user");
        return false;
      } finally {
        this.isLoading = false;
      }
    },
    async login(creds) {
      try {
        this.isLoading = true;
        const { token, refreshToken } = await users.login(creds);
        this.setTokens({ token, refreshToken });
        this.isLoggedIn = true;
        return true;
      } catch (error) {
        toast.error("Can't log in");
        return false;
      } finally {
        this.isLoading = false;
      }
    },
    async current() {
      try {
        this.isLoading = true;
        const token = this.token;
        await users.current(token);
        this.isLoggedIn = true;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    },
    async logout() {
      try {
        this.isLoading = true;
        await users.logout();
        toast.success("Logout successfull");
      } catch (error) {
        toast.error("Wrong server response, forcing logout");
      } finally {
        this.$reset();
      }
    },
  },
});
