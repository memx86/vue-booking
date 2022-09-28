<template>
  <section class="profile">
    <Container class="profile__container">
      <TitleVue>Orders</TitleVue>
      <ProfileOrdersList :orders="orders" />
    </Container>
  </section>
</template>

<script>
import Container from "../components/shared/Container.vue";
import TitleVue from "../components/shared/Title.vue";
import { getOrders } from "../services/orders";
import ProfileOrdersList from "../components/profile/ProfileOrdersList.vue";
export default {
  name: "ProfilePage",
  components: { Container, TitleVue, ProfileOrdersList },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const orders = await getOrders();
      this.orders = orders;
    } catch (error) {
      console.error(error);
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
