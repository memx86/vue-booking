<template>
  <header class="header">
    <Container class="header__container">
      <LogoVue />
      <NavLinks />
    </Container>
  </header>
</template>

<script>
import Container from "./shared/Container.vue";
import LogoVue from "./shared/Logo.vue";
import NavLinks from "./NavLinks.vue";

export default {
  name: "HeaderComponent",
  components: { Container, LogoVue, NavLinks },
};
</script>

<style lang="scss" scoped>
.header {
  padding-top: 16px;
  padding-bottom: 16px;
  background-color: var(--bg-cl);
}

.header__container {
  display: flex;
  justify-content: space-between;
}
</style>
