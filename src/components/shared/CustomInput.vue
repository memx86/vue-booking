<template>
  <label class="input__wrapper">
    <input
      v-bind="$attrs"
      :value="modelValue.value"
      @input="handleInput"
      class="input__input"
      :class="getIsValidClass ? 'input__input--success' : 'input__input--error'"
      placeholder=" "
    />
    <span
      v-if="!!label"
      class="input__label"
      :class="hasValue && 'input__label--up'"
      >{{ label }}</span
    >
    <span v-if="!isValid" class="input__error">{{ errorMessage }}</span>
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    error: {
      type: String,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  inheritAttrs: false,
  data() {
    return {
      isValid: false,
      errorMessage: "",
    };
  },
  computed: {
    hasValue() {
      return !!this.modelValue.value;
    },
    getIsValidClass() {
      if (!this.hasValue) return true;
      return this.isValid;
    },
  },
  methods: {
    emitUpdate(value) {
      this.$emit("update:modelValue", {
        value,
        isValid: this.isValid,
      });
    },
    handleInput(e) {
      const { value } = e.target;
      this.validate(value);
      this.emitUpdate(value);
    },
    validate(value) {
      // if component recieves error prop it's invalid so no need for validation
      if (this.error) {
        return;
      }
      // if value is passed use it. If not get value from state
      const valueToValidate = value ?? this.modelValue.value;
      const hasPassed = this.rules.every((rule) => {
        const { hasPassed, errorMessage } = rule(valueToValidate);

        if (!hasPassed) this.errorMessage = errorMessage;

        return hasPassed;
      });

      this.isValid = hasPassed;
    },
  },
  watch: {
    isValid() {
      if (!this.isValid) return;
      this.errorMessage = "";
    },
    error() {
      if (!this.error) {
        // if error props disappears it means that last input made error to go away. So we validate input and emit event with new value
        // TODO check is validate() is really necessary here
        this.validate();
        this.emitUpdate(this.modelValue.value);
        return;
      }
      // if component recieves error prop set isValid to false and display errorMessage
      this.isValid = false;
      this.errorMessage = this.error;
    },
  },
};
</script>

<style lang="scss" scoped>
.input__wrapper {
  display: block;
  position: relative;
  --padding-left: 20px;
}
.input__input {
  width: 100%;
  min-height: 44px;
  padding-left: var(--padding-left);
  font-size: 18px;
  border: 2px solid var(--accent-cl);
  transition: border-color 250ms linear;

  &:active,
  &:focus,
  &:focus-visible,
  &:focus-within {
    outline: none;
  }

  &--success {
    &:not(:placeholder-shown) {
      border-color: var(--success-cl);
    }
  }

  &--error {
    border-color: var(--error-cl);
  }
}
.input__label {
  position: absolute;
  left: var(--padding-left);
  top: 50%;
  transform: translateY(-50%);
  transition: transform 250ms linear;
  pointer-events: none;
}

.input__label--up {
  transform: translateY(-44px);
  pointer-events: all;
}

.input__error {
  position: absolute;
  right: 0;
  bottom: -50%;
  color: var(--error-cl);
}
</style>
