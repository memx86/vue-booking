<template>
  <nav class="nav">
    <router-link :to="{ name: 'login' }" class="nav__link">Sign in</router-link>
    <span> / </span>
    <router-link :to="{ name: 'register' }" class="nav__link"
      >Sign up</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavLinks",
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
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: var(--accent-cl);
  }
}
</style>
