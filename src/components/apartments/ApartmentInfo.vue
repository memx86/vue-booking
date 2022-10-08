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
      v-if="authStore.isLoggedIn && !isLoading"
      @click="makeOrder"
      class="apartment-info__btn"
    >
      Book
    </CustomButton>
    <div v-if="isLoading" class="apartment-info__loader">
      <Loader />
    </div>
    <p v-if="!authStore.isLoggedIn" class="apartment-info__prompt">
      <router-link :to="{ name: 'login' }" class="apartment-info__link"
        >Log in</router-link
      >
      to book an apartment
    </p>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
import TitleVue from "../shared/Title.vue";
import StarRating from "../shared/StarRating.vue";
import CustomButton from "../shared/CustomButton.vue";
import Loader from "../shared/loaders/Loader.vue";

import { useAuthStore } from "../../store/auth";
import { createOrder } from "../../services/orders";

export default {
  name: "ApartmentInfo",
  components: { TitleVue, StarRating, CustomButton, Loader },
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const authStore = useAuthStore();
    const toast = useToast();
    return { authStore, toast };
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async makeOrder() {
      try {
        this.isLoading = true;
        const payload = {
          date: Date.now().toString(),
          apartmentId: this.apartment.id,
        };
        await createOrder(payload);
        this.toast.success("Order created");
      } catch (error) {
        this.toast.error("Can't create order");
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin";
.apartment-info__wrapper {
  @include mq(tablet) {
    width: 730px;
  }
}
.apartment-info__title-wrapper {
  margin-bottom: 20px;
  display: flex;
  align-items: baseline;
  gap: 20px;
}

.apartment-info__img {
  margin-bottom: 30px;

  @include mq(tablet) {
    width: 730px;
    height: 410px;
  }
}
.apartment-info__description {
  margin-bottom: 24px;
}
.apartment-info__btn {
  margin-left: auto;
  margin-right: auto;
}
.apartment-info__loader {
  display: flex;
  justify-content: center;
}
.apartment-info__prompt {
  text-align: center;
}
.apartment-info__link {
  text-decoration: underline;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: var(--accent-cl);
  }
}
</style>
