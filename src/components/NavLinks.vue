<template>
  <nav v-if="!authStore.isLoggedIn" class="nav">
    <router-link :to="{ name: 'login' }" class="nav__link">Sign in</router-link>
    <span> / </span>
    <router-link :to="{ name: 'register' }" class="nav__link"
      >Sign up</router-link
    >
  </nav>
  <router-link v-else :to="{ name: 'profile' }" class="nav__link"
    >Profile</router-link
  >
</template>

<script>
import { useAuthStore } from "../store/auth";

export default {
  name: "NavLinks",
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--main-light-cl);
}

.nav__link {
  color: var(--main-light-cl);
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: var(--accent-cl);
  }
}
</style>
