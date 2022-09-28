<template>
  <button type="button" class="icon-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "IconButton",
};
</script>

<style lang="scss" scoped>
.icon-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
