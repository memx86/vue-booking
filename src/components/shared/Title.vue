<template>
  <component :is="heading" class="title">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "TitleComponent",
  props: {
    level: {
      type: String,
      default: "1",
    },
  },
  computed: {
    heading() {
      return `h${this.level}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 700;
}
</style>
