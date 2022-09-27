<template>
  <div v-if="review" class="reviews-user">
    <svg class="reviews-user__avatar">
      <use :href="avatarSrc"></use>
    </svg>
    <div class="reviews-user__wrapper">
      <p>{{ review.author }}</p>
      <StarRating :rating="review.rating" />
    </div>
  </div>
</template>

<script>
import StarRating from "../../shared/StarRating.vue";
import sprite from "../../../assets/images/sprite.svg";

export default {
  name: "ReviewsUser",
  components: { StarRating },
  props: {
    review: {
      type: Object,
    },
  },
  computed: {
    avatarSrc() {
      return `${sprite}#avatar`;
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-user {
  display: flex;
  gap: 20px;
}
.reviews-user__avatar {
  width: 34px;
  height: 34px;
}
.reviews-user__wrapper {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
</style>
