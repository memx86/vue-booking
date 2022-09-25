import { useAuthStore } from "../store/auth";

const authorizedGuard = () => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedIn;
  if (!isLoggedIn) return { name: "login" };
};

const unauthorizedGuard = () => {
  const authStore = useAuthStore();
  const isLoggedIn = authStore.isLoggedIn;
  if (isLoggedIn) return { name: "home" };
};

export { authorizedGuard, unauthorizedGuard };
