<template>
  <div class="rating" :style="ratingWidth">
    <div class="rating__empty-stars">
      <svg v-for="index in ratingLimit" :key="index" class="rating__icon">
        <use :href="starEmptySrc"></use>
      </svg>
    </div>
    <div class="rating__filled-stars" :style="filledStarsWidth">
      <svg v-for="index in ratingLimit" :key="index" class="rating__icon">
        <use :href="starFilledSrc"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import sprite from "../../assets/images/sprite.svg";
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    ratingLimit: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    starFilledSrc() {
      return `${sprite}#star-filled`;
    },
    starEmptySrc() {
      return `${sprite}#star-empty`;
    },
    ratingWidth() {
      return `width: ${this.ratingLimit * 20}px;`;
    },
    filledStarsWidth() {
      return `width: ${(this.rating / this.ratingLimit) * 100}%;`;
    },
  },
};
</script>

<style lang="scss" scoped>
.rating {
  position: relative;
  display: inline-flex;
  height: 16px;
  gap: 5px;
  align-items: center;
  flex-shrink: 0;
}
.rating__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  fill: var(--accent-cl);
}
.rating__empty-stars {
  position: absolute;
  height: 16px;
  top: 0;
  left: 0;
  display: inline-flex;
  gap: 5px;
  align-items: center;
  overflow: hidden;
}
.rating__filled-stars {
  position: absolute;
  height: 16px;
  top: 0;
  left: 0;
  display: inline-flex;
  gap: 5px;
  align-items: center;
  overflow: hidden;
}
</style>
