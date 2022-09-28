<template>
  <p>
    <span class="price">UAH {{ price }} </span>
    for the night
  </p>
</template>

<script>
export default {
  name: "PriceComponent",
  props: {
    price: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="scss" scoped>
.price {
  font-size: 20px;
  font-weight: 700;
}
</style>
