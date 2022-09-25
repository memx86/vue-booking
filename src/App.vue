<template>
  <div class="app__wrapper">
    <HeaderVue />
    <main class="main">
      <router-view></router-view>
    </main>
    <FooterVue />
  </div>
</template>

<script>
import HeaderVue from "./components/shared/Header.vue";
import FooterVue from "./components/shared/Footer.vue";
import { useAuthStore } from "./store/auth";

export default {
  name: "App",
  components: {
    HeaderVue,
    FooterVue,
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  mounted() {
    if (!this.authStore.token) return;
    this.authStore.refresh();
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
