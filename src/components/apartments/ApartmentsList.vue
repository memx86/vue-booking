<template>
  <ul class="apartments-list__list">
    <li
      v-for="apartment in apartments"
      :key="apartment.id"
      class="apartments-list__item"
    >
      <ApartmentsItem v-if="!!apartment" :apartment="apartment" />
    </li>
  </ul>
</template>

<script>
import ApartmentsItem from "./ApartmentsItem.vue";
export default {
  name: "ApartmentsList",
  props: {
    apartments: {
      type: Array,
      required: true,
    },
  },
  components: { ApartmentsItem },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/mixin";
.apartments-list__list {
  display: grid;
  gap: 20px;

  @include mq(tablet-only) {
    grid-template-columns: 1fr 1fr;
  }
  @include mq(desktop) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
  }
}
</style>
