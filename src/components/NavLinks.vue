<template>
  <nav v-if="!authStore.isLoggedIn" class="nav">
    <router-link :to="{ name: 'login' }" class="nav__link">Sign in</router-link>
    <span> / </span>
    <router-link :to="{ name: 'register' }" class="nav__link">
      Sign up
    </router-link>
  </nav>
  <ProfileBar v-else />
</template>

<script>
import { useAuthStore } from "../store/auth";

import ProfileBar from "./profile/ProfileBar.vue";

export default {
  name: "NavLinks",
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },

  components: { ProfileBar },
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
  display: flex;
  align-items: center;
  color: var(--main-light-cl);
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: var(--accent-cl);
  }
}
</style>
