<template>
  <ul v-if="!!apartments.length" class="apartments-list__list">
    <li
      v-for="apartment in apartments"
      :key="apartment.id"
      class="apartments-list__item"
    >
      <ApartmentsItem :apartment="apartment" />
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
      default: () => [],
    },
  },
  components: { ApartmentsItem },
};
</script>

<style lang="scss" scoped>
.apartments-list__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}
</style>
