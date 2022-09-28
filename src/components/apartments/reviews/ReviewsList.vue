<template>
  <ul>
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
    reviews: {
      type: Array,
      required: true,
    },
  },
  components: { ReviewsItem },
};
</script>

<style lang="scss" scoped></style>
