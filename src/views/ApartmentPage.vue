<template>
  <FullScreenLoader v-if="isLoading" />
  <section class="apartment">
    <Container class="apartment__container">
      <ApartmentInfo :apartment="apartment" />
      <aside class="apartment__aside">
        <OwnerInfo v-if="apartment.owner" :owner="apartment.owner" />
        <Reviews :apartment="apartment" />
      </aside>
    </Container>
  </section>
</template>

<script>
import { useToast } from "vue-toastification";
import Container from "../components/shared/Container.vue";
import ApartmentInfo from "../components/apartments/ApartmentInfo.vue";
import OwnerInfo from "../components/apartments/OwnerInfo.vue";
import Reviews from "../components/apartments/reviews/Reviews.vue";
import FullScreenLoader from "../components/shared/loaders/FullScreenLoader.vue";

import { getApartmentById } from "../services/apartments";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentInfo,
    OwnerInfo,
    Reviews,
    FullScreenLoader,
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      apartment: {},
      isLoading: false,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      const apartment = await getApartmentById(this.$route.params.id);
      this.apartment = apartment;
    } catch (error) {
      this.toast.error("Can't get apartment information");
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixin";
.apartment {
  padding-top: 60px;
  padding-bottom: 70px;
}
.apartment__container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  @include mq(desktop) {
    flex-direction: row;
  }
}
.apartment__aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
