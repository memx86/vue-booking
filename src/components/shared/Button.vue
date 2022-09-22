<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CustomButton",
};
</script>

<style lang="scss" scoped>
.button {
  min-width: 220px;
  min-height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-light-cl);
  background-color: var(--accent-cl);
  border: 1px solid transparent;
  transition: color 250ms linear, background-color 250ms linear,
    border-color 250ms linear;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: var(--accent-cl);
    background-color: var(--main-light-cl);
    border-color: var(--accent-cl);
    outline: none;
  }
}
</style>
