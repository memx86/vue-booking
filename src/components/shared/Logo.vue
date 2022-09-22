<template>
  <div class="wrapper">
    <svg width="26" height="28">
      <use :href="link"></use>
    </svg>
    <span>
      <span class="text text--light">GO</span>
      <span class="text text--accent">Home</span>
    </span>
  </div>
</template>

<script>
import sprite from "../../assets/images/sprite.svg";

export default {
  name: "LogoComponent",
  computed: {
    link() {
      return `${sprite}#door`;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.text {
  font-size: 18px;
  font-weight: 800;
  &--light {
    color: var(--main-light-cl);
  }
  &--accent {
    color: var(--accent-cl);
  }
}
</style>
