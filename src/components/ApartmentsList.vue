<template>
  <ul v-if="!!apartments.length" class="apartments-list__list">
    <template v-for="apartment in apartments" :key="apartment.id">
      <li class="apartments-list__item">
        <img :src="apartment.imgUrl" class="apartments-list__img" />
      </li>
    </template>
  </ul>
</template>

<script>
// const apartment = {
//   id: "5fecb172f1af2f4ba2a9c140",
//   title: "Delectus et iste.",
//   imgUrl:
//     "https://res.cloudinary.com/kyoo/image/upload/v1609344654/booking/apartment-20_zwqzt4.jpg",
//   descr:
//     "Debitis similique unde et eligendi sapiente in iure blanditiis distinctio. Cum nihil temporibus qui quam aut. Nesciunt qui eveniet eum quam voluptate numquam.",
//   rating: 3,
//   price: 1667,
//   location: { city: "Dnipro" },
//   owner: {
//     name: "Bobbie",
//     phone: "582-740-2926",
//     email: "Pete_Carter53@hotmail.com",
//   },
// };
export default {
  name: "ApartmentsList",
  props: {
    apartments: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list__list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
}

.apartments-list__img {
  height: 100%;
  object-fit: cover;
}
</style>
