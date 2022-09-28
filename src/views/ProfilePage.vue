<template>
  <section class="profile">
    <Container class="profile__container">
      <FullScreenLoader v-if="isLoading" />
      <TitleVue>Orders</TitleVue>
      <ProfileOrdersList v-if="!!orders.length" :orders="orders" />
    </Container>
  </section>
</template>

<script>
import Container from "../components/shared/Container.vue";
import TitleVue from "../components/shared/Title.vue";
import { getOrders } from "../services/orders";
import ProfileOrdersList from "../components/profile/ProfileOrdersList.vue";
import { useToast } from "vue-toastification";
import FullScreenLoader from "../components/shared/loaders/FullScreenLoader.vue";
export default {
  name: "ProfilePage",
  components: { Container, TitleVue, ProfileOrdersList, FullScreenLoader },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      orders: [],
      isLoading: false,
    };
  },
  async created() {
    try {
      this.isLoading = true;
      const orders = await getOrders();
      this.orders = orders;
    } catch (error) {
      this.toast.error("Can't get your orders");
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.profile {
  padding-top: 50px;
  padding-bottom: 100px;
}
.profile__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
