<template>
  <ul v-if="reviews">
    <li v-for="review in reviews" :key="review.id">
      <ReviewsItem :review="review" />
    </li>
  </ul>
</template>

<script>
import ReviewsItem from "./ReviewsItem.vue";
export default {
  name: "ReviewsList",
  props: {
    reviews: { type: Array },
  },
  components: { ReviewsItem },
};
</script>

<style lang="scss" scoped></style>
