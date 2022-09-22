<template>
  <label class="input__wrapper">
    <input
      v-bind="$attrs"
      :value="modelValue"
      @input="handleInput"
      class="input__input"
    />
    <span
      v-if="!!label"
      class="input__label"
      :class="hasValue && 'input__label--up'"
      >{{ label }}</span
    >
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
  },
  inheritAttrs: false,
  computed: {
    hasValue() {
      return !!this.modelValue;
    },
  },
  methods: {
    handleInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input__wrapper {
  display: block;
  position: relative;
  --padding: 20px;
}
.input__input {
  width: 100%;
  min-height: 44px;
  padding-left: var(--padding);
  font-size: 18px;
  border: 2px solid var(--accent-cl);
}
.input__label {
  position: absolute;
  left: var(--padding);
  top: 50%;
  transform: translateY(-50%);
  transition: transform 250ms linear;
  pointer-events: none;
}

.input__label--up {
  transform: translateY(-44px);
  pointer-events: all;
}
</style>
