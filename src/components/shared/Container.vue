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
@import "../../assets/styles/mixin";
.container {
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
  max-width: 460px;

  @include mq(tablet-only) {
    padding-left: 19px;
    padding-right: 19px;
    max-width: 730px;
  }

  @include mq(desktop) {
    padding-left: 45px;
    padding-right: 45px;
    max-width: 1200px;
  }
}
</style>
