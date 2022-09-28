<template>
  <nav v-if="!authStore.isLoggedIn" class="nav">
    <router-link :to="{ name: 'login' }" class="nav__link">Sign in</router-link>
    <span> / </span>
    <router-link :to="{ name: 'register' }" class="nav__link"
      >Sign up</router-link
    >
  </nav>
  <router-link v-else :to="{ name: 'profile' }" class="nav__link">
    Profile
    <svg class="nav__avatar">
      <use :href="iconUrl"></use>
    </svg>
  </router-link>
</template>

<script>
import { useAuthStore } from "../store/auth";
import sprite from "../assets/images/sprite.svg";

export default {
  name: "NavLinks",
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  computed: {
    iconUrl() {
      return `${sprite}#human`;
    },
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
  display: flex;
  align-items: center;
  color: var(--main-light-cl);
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: var(--accent-cl);
  }
}

.nav__avatar {
  width: 18px;
  height: 18px;
  margin-left: 10px;
  fill: var(--accent-cl);
}
</style>
