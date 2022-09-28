<template>
  <div class="reviews-item">
    <ReviewsUser :review="review" />
    <p class="reviews-item__content">{{ review.content }}</p>
  </div>
</template>

<script>
import ReviewsUser from "./ReviewsUser.vue";
export default {
  name: "ReviewsItem",
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
  components: { ReviewsUser },
};
</script>

<style lang="scss" scoped>
.reviews-item {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border-bottom: 0.5px solid var(--secondary-accent-cl);
}
.reviews-item__content {
  max-height: 6.25em;
  text-overflow: ellipsis;
}
</style>
