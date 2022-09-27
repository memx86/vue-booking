<template>
  <div class="rating">
    <svg v-for="index in ratingLimit" :key="index" class="rating__icon">
      <use :href="starEmptySrc"></use>
    </svg>
    <div class="rating__stars" :style="filledStarsWidth">
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
  gap: 5px;
  align-items: center;
}
.rating__icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  fill: var(--accent-cl);
}

.rating__stars {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-flex;
  gap: 5px;
  align-items: center;
  overflow: hidden;
}
</style>
