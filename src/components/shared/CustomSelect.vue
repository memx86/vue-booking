<template>
  <div class="select__wrapper" @click="toggleOptions" tabindex="0">
    <p class="select__value">
      {{ modelValue.label ? modelValue.label : placeholder }}
    </p>
    <svg class="select__icon" :class="isOpen && 'select__icon--open'">
      <use :href="icon"></use>
    </svg>
    <ul v-if="isOpen" class="select__list">
      <li
        v-for="(option, idx) in options"
        :key="option.label"
        @click="handleOptionClick(option)"
        @mouseenter="handleOptionHighlight(idx)"
        tabindex="0"
        class="select__item"
        :class="highlightedOptionIdx === idx && 'select__item--active'"
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
      highlightedOptionIdx: 0,
    };
  },
  computed: {
    icon() {
      return `${sprite}#triangle`;
    },
    valueIdx() {
      return this.options.findIndex(
        (option) => option.value === this.modelValue.value
      );
    },
  },
  methods: {
    openOptions() {
      this.isOpen = true;
    },
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
    handleOptionHighlight(idx) {
      this.highlightedOptionIdx = idx;
    },
    clickOutside(e) {
      const clickedElement = e.target;
      const isClickedOutside = !this.$el.contains(clickedElement);
      if (isClickedOutside) this.closeOptions();
    },
    handleKeyboardEvents(e) {
      if (e.target !== this.$el) return;
      e.preventDefault();

      switch (e.code) {
        case "Space":
        case "Enter":
        case "NumpadEnter":
          this.toggleOptions();
          if (this.highlightedOptionIdx !== this.valueIdx && !this.isOpen)
            this.handleOptionClick(this.options[this.highlightedOptionIdx]);
          break;
        case "Escape":
          this.closeOptions();
          this.$el.blur();
          break;
        case "ArrowUp":
        case "ArrowDown":
        case "Tab": {
          const newIdx =
            this.highlightedOptionIdx + (e.code === "ArrowUp" ? -1 : 1);

          if (newIdx >= 0 && newIdx < this.options.length) {
            this.handleOptionHighlight(newIdx);
          }
          break;
        }
        default:
      }
    },
  },
  watch: {
    isOpen() {
      if (!this.isOpen) return;
      this.highlightedOptionIdx = this.valueIdx;
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside);
    document.addEventListener("keydown", this.handleKeyboardEvents);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
    document.removeEventListener("keydown", this.handleKeyboardEvents);
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
  z-index: 100;
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

  &--active {
    background-color: var(--accent-cl);
    color: var(--main-light-cl);
  }
}
</style>
