<template>
  <div class="orders-item">
    <img
      :src="apartment.imgUrl"
      :alt="apartment.title"
      class="orders-item__img"
    />
    <div class="orders-item__content">
      <div class="orders-item__wrapper">
        <TitleVue level="2">{{ apartment.title }}</TitleVue>
        <p>{{ apartment.location.city }}</p>
      </div>
      <Price :price="apartment.price" />
    </div>
  </div>
</template>

<script>
import TitleVue from "../shared/Title.vue";
import Price from "../shared/Price.vue";
export default {
  name: "ProfileOrdersItem",
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  components: { TitleVue, Price },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin";
.orders-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--secondary-accent-cl);

  @include mq(tablet) {
    flex-direction: row;
  }
}
.orders-item__img {
  @include mq(tablet) {
    width: 349px;
    height: 196px;
  }
}
.orders-item__content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;

  @include mq(tablet) {
    gap: unset;
  }
}
.orders-item__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
