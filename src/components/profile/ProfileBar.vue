<template>
  <div class="profile-bar" @mouseenter="open">
    <router-link :to="{ name: 'profile' }" class="profile-bar__link">
      Profile
      <svg class="profile-bar__avatar">
        <use :href="avatarUrl"></use>
      </svg>
    </router-link>
    <IconButton @click="logout" aria-label="Logout" class="profile-bar__btn">
      <svg class="profile-bar__icon">
        <use :href="iconUrl"></use>
      </svg>
    </IconButton>
  </div>
</template>

<script>
import IconButton from "../shared/IconButton.vue";

import { useAuthStore } from "../../store/auth";

import sprite from "../../assets/images/sprite.svg";

export default {
  name: "ProfileBar",
  components: { IconButton },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  computed: {
    avatarUrl() {
      return `${sprite}#human`;
    },
    iconUrl() {
      return `${sprite}#exit`;
    },
  },
  methods: {
    async logout() {
      await this.authStore.logout();
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-bar {
  display: flex;
  gap: 20px;
  align-items: center;
  color: var(--main-light-cl);
}
.profile-bar__link {
  display: flex;
  align-items: center;
  color: var(--main-light-cl);
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: var(--accent-cl);
  }
}
.profile-bar__avatar {
  width: 18px;
  height: 18px;
  margin-left: 10px;
  fill: var(--accent-cl);
}
.profile-bar__btn {
  color: var(--accent-cl);
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: var(--secondary-accent-cl);
  }
}
.profile-bar__icon {
  width: 30px;
  height: 30px;
  fill: currentColor;
}
</style>
