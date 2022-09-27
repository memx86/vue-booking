<template>
  <div v-if="reviews" class="rating">
    <TitleVue level="3">Rating summary</TitleVue>
    <div class="rating__wrapper">
      <span class="rating__text">{{ reviews.length }} reviews</span>
      <StarRating :rating="calculatedRating" />
    </div>
  </div>
</template>

<script>
import TitleVue from "../../shared/Title.vue";
import StarRating from "../../shared/StarRating.vue";
export default {
  name: "ReviewsRating",
  components: { TitleVue, StarRating },
  props: {
    reviews: {
      type: Array,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    calculatedRating() {
      if (!this.reviews?.length) return;
      const calculatedRating =
        this.reviews.reduce((acc, review) => (acc += review.rating), 0) /
        this.reviews.length;
      return calculatedRating ? calculatedRating : this.rating;
    },
  },
};
</script>

<style lang="scss" scoped>
.rating {
  padding: 20px;
  background-color: var(--secondary-accent-cl);
}

.rating__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.rating__text {
  display: flex;
  align-items: center;
}
</style>
