<template>
  <div class="apartments-item__wrapper">
    <router-link
      :to="{ name: 'apartment', params: { id: apartment.id } }"
      class="apartments-item__link"
    >
      <img
        :src="apartment.imgUrl"
        :alt="apartment.title"
        class="apartments-item__img"
      />
      <div class="apartments-item__overlay">
        <p class="apartments-item__description">{{ apartment.descr }}</p>
        <StarRating :rating="apartment.rating" />
        <Price :price="apartment.price" />
      </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from "../shared/StarRating.vue";
import Price from "../shared/Price.vue";

export default {
  name: "ApartmentsItem",
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  components: { StarRating, Price },
};
</script>

<style lang="scss" scoped>
.apartments-item__wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.apartments-item__link {
  height: 100%;
}
.apartments-item__img {
  height: 100%;
  object-fit: cover;
}
.apartments-item__overlay {
  position: absolute;
  padding: 20px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: translateY(100%);
  color: var(--main-light-cl);
  background-color: var(--bg-cl-opacity);
  transition: transform 250ms linear;
  .apartments-item__link:hover &,
  .apartments-item__link:focus & {
    transform: translateY(0);
  }
}
.apartments-item__description {
  max-height: 5em;
  overflow: hidden;
}
</style>
