<template>
  <article v-if="apartment" class="reviews">
    <ReviewsRating :reviews="apartment.reviews" :rating="apartment.rating" />
    <ReviewsList :reviews="reviewsToRender" />
    <CustomButton secondary @click="handleButtonClick">
      {{ buttonText }}
    </CustomButton>
  </article>
</template>

<script>
import ReviewsRating from "./ReviewsRating.vue";
import ReviewsList from "./ReviewsList.vue";
import CustomButton from "../../shared/CustomButton.vue";
export default {
  name: "ReviewsComponent",
  components: { ReviewsRating, ReviewsList, CustomButton },
  props: {
    apartment: {
      type: Object,
    },
  },
  data() {
    return {
      isOpen: false,
      reviewsLimit: 2,
    };
  },
  computed: {
    reviewsLength() {
      return this.apartment.reviews?.length ?? 0;
    },
    reviewsToRender() {
      return this.apartment.reviews?.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.isOpen ? "Minimize" : "Read more...";
    },
  },
  methods: {
    handleButtonClick() {
      this.reviewsLimit = this.isOpen ? 2 : this.reviewsLength;
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--secondary-accent-cl);
}
</style>
