<template>
  <div class="apartment-info__wrapper">
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
    <CustomButton
      v-if="authStore.isLoggedIn"
      @click="makeOrder"
      class="apartment-info__btn"
    >
      Book
    </CustomButton>
    <p v-else>
      <router-link :to="{ name: 'login' }">Log in</router-link>
      to book an apartment
    </p>
  </div>
</template>

<script>
import TitleVue from "../shared/Title.vue";
import StarRating from "../shared/StarRating.vue";
import CustomButton from "../shared/CustomButton.vue";
import { useAuthStore } from "../../store/auth";
import { createOrder } from "../../services/orders";

export default {
  name: "ApartmentInfo",
  components: { TitleVue, StarRating, CustomButton },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  methods: {
    async makeOrder() {
      try {
        const payload = {
          date: Date.now().toString(),
          apartmentId: this.apartment.id,
        };
        await createOrder(payload);
      } catch (error) {
        console.error(error);
      }
    },
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
