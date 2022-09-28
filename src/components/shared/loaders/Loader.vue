<template>
  <svg class="loader">
    <use :href="iconSrc"></use>
  </svg>
</template>

<script>
import sprite from "../../../assets/images/sprite.svg";
export default {
  name: "LoaderComponent",
  computed: {
    iconSrc() {
      return `${sprite}#spinner`;
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  width: 50px;
  height: 50px;
  fill: currentColor;
  color: var(--accent-cl);
  animation-name: rotation;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes rotation {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
}
</style>
