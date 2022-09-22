<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContainerComponent",
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  padding-left: 45px;
  padding-right: 45px;
  margin: 0 auto;
}
</style>
