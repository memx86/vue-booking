<template>
  <div v-if="apartment" class="apartment-info__wrapper">
    <div class="apartment-info__title-wrapper">
      <TitleVue>{{ apartment.title }}</TitleVue>
      <StarRating :rating="apartment.rating" />
    </div>
    <img
      :src="apartment.imgUrl"
      :alt="apartment.title"
      class="apartment-info__img"
    />
    <p class="apartment-info__description">{{ apartment.descr }}</p>
    <CustomButton class="apartment-info__btn">Book</CustomButton>
  </div>
</template>

<script>
import TitleVue from "../shared/Title.vue";
import StarRating from "../shared/StarRating.vue";
import CustomButton from "../shared/CustomButton.vue";

export default {
  name: "ApartmentInfo",
  components: { TitleVue, StarRating, CustomButton },
  props: {
    apartment: Object,
  },
};
</script>

<style lang="scss" scoped>
.apartment-info__wrapper {
  width: 730px;
}
.apartment-info__title-wrapper {
  margin-bottom: 20px;
  display: flex;
  align-items: baseline;
  gap: 20px;
}

.apartment-info__img {
  width: 730px;
  height: 410px;
  margin-bottom: 30px;
}

.apartment-info__description {
  margin-bottom: 24px;
}

.apartment-info__btn {
  margin-left: auto;
  margin-right: auto;
}
</style>
