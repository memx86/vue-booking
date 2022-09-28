<template>
  <div class="fullscreen-loader">
    <Loader />
  </div>
</template>

<script>
import Loader from "./Loader.vue";
export default {
  name: "FullScreenLoader",
  components: { Loader },
};
</script>

<style lang="scss" scoped>
.fullscreen-loader {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-cl-opacity);
}
</style>
