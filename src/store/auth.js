import { defineStore } from "pinia";

import users from "../services/users";

const initialState = {
  isLoggedIn: false,
  token: "",
};

export const useAuthStore = defineStore("auth", {
  state: () => ({ ...initialState }),
  persist: {
    paths: ["token"],
  },
  actions: {
    async register(creds) {
      try {
        const { token } = await users.register(creds);
        this.token = token;
        this.isLoggedIn = true;
      } catch (error) {
        console.error(error);
      }
    },
    async login(creds) {
      try {
        const { token } = await users.login(creds);
        this.token = token;
        this.isLoggedIn = true;
      } catch (error) {
        console.error(error);
      }
    },
    async refresh() {
      try {
        await users.refresh(this.token);
        this.isLoggedIn = true;
      } catch (error) {
        this.token = "";
        console.log(error);
      }
    },
    async logout() {
      try {
        await users.logout();
        this.token = "";
        this.isLoggedIn = false;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
