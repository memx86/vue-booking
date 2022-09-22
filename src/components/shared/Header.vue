<template>
  <header class="header">
    <Container><LogoVue /></Container>
  </header>
</template>

<script>
import Container from "./Container.vue";
import LogoVue from "./Logo.vue";
export default {
  name: "HeaderComponent",
  components: { Container, LogoVue },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: var(--bg-cl);
}
</style>
