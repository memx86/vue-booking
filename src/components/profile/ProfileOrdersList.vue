<template>
  <ul v-if="orders" class="orders">
    <li v-for="order in orders" :key="order.id">
      <ProfileOrdersItem :apartment="order.apartment" />
    </li>
  </ul>
</template>

<script>
import ProfileOrdersItem from "./ProfileOrdersItem.vue";
export default {
  name: "ProfileOrdersList",
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  components: { ProfileOrdersItem },
};
</script>

<style lang="scss" scoped>
.orders {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
