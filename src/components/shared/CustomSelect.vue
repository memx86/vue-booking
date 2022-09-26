<template>
  <div class="select__wrapper" @click="toggleOptions">
    <p class="select__value">
      {{ modelValue.label ? modelValue.label : placeholder }}
    </p>
    <svg class="select__icon" :class="isOpen && 'select__icon--open'">
      <use :href="icon"></use>
    </svg>
    <ul v-if="isOpen" class="select__list">
      <li
        v-for="option in filteredOptions"
        :key="option.label"
        class="select__item"
        @click="handleOptionClick(option)"
        tabindex="1"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<script>
import sprite from "../../assets/images/sprite.svg";

export default {
  name: "CustomSelect",
  props: {
    modelValue: {
      type: Object,
    },
    options: {
      type: Array,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    icon() {
      return `${sprite}#triangle`;
    },
    filteredOptions() {
      return this.options.filter(
        (option) => this.modelValue.value !== option.value
      );
    },
  },
  methods: {
    toggleOptions() {
      this.isOpen = !this.isOpen;
    },
    closeOptions() {
      this.isOpen = false;
    },
    handleOptionClick(option) {
      const { value, label } = option;
      this.$emit("update:modelValue", { value, label });
      this.closeOptions();
    },
    clickOutside(e) {
      const clickedElement = e.target;
      const isClickedOutside = !this.$el.contains(clickedElement);
      if (isClickedOutside) this.closeOptions();
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
  },
};
</script>

<style lang="scss" scoped>
.select__wrapper {
  position: relative;
  --height: 44px;
  --border-width: 2px;
  min-width: 220px;
  height: var(--height);
  padding-left: 20px;
  display: flex;
  align-items: center;
  border: var(--border-width) solid var(--accent-cl);
  cursor: pointer;
}
.select__value {
  display: flex;
  align-items: center;
}

.select__icon {
  position: absolute;
  width: 12px;
  height: 10px;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 250ms linear;

  &--open {
    transform: translateY(-50%) rotate(180deg);
  }
}

.select__list {
  position: absolute;
  top: calc(var(--height) + var(--border-width));
  left: calc(var(--border-width) * -1);
  width: calc(100% + var(--border-width) * 2);
  background-color: var(--main-light-cl);
}

.select__item {
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 20px;
  border-left: var(--border-width) solid var(--accent-cl);
  border-right: var(--border-width) solid var(--accent-cl);
  transition: background-color 250ms linear, color 250ms linear;

  &:first-of-type {
    border-top: var(--border-width) solid var(--accent-cl);
  }

  &:last-of-type {
    border-bottom: var(--border-width) solid var(--accent-cl);
  }

  &:hover,
  &:focus {
    background-color: var(--accent-cl);
    color: var(--main-light-cl);
    outline: none;
  }
}
</style>
