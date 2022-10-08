<template>
  <div class="app__wrapper">
    <HeaderVue />
    <main class="main">
      <router-view></router-view>
    </main>
    <FooterVue />
  </div>
  <FullScreenLoader v-if="authStore.isLoading" />
</template>

<script>
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import FullScreenLoader from "./components/shared/loaders/FullScreenLoader.vue";
import { useAuthStore } from "./store/auth";

export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
    FullScreenLoader,
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  async created() {
    // get current user
    if (this.authStore.token) await this.authStore.current();

    // route guards if token is rehydrated and isLoggedIn becomes true
    if (this.authStore.isLoggedIn) {
      if (this.$route.name === "login" || this.$route.name === "register")
        this.$router.push({ name: "home" });
    }

    if (!this.authStore.isLoggedIn) {
      if (this.$route.name === "profile") this.$router.push({ name: "login" });
    }
  },
};
</script>

<style scoped>
.app__wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
</style>
