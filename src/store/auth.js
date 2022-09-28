import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

import users from "../services/users";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  token: "",
};

const toast = useToast();

export const useAuthStore = defineStore("auth", {
  state: () => ({ ...initialState }),
  persist: {
    paths: ["token"],
  },
  actions: {
    async register(creds) {
      try {
        this.isLoading = true;
        const { token } = await users.register(creds);
        this.token = token;
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
        const { token } = await users.login(creds);
        this.token = token;
        this.isLoggedIn = true;
        return true;
      } catch (error) {
        toast.error("Can't log in");
        return false;
      } finally {
        this.isLoading = false;
      }
    },
    async refresh() {
      try {
        this.isLoading = true;
        await users.refresh(this.token);
        this.isLoggedIn = true;
      } catch (error) {
        this.token = "";
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
        this.isLoading = false;
        this.token = "";
        this.isLoggedIn = false;
      }
    },
  },
});
