<template>
  <div class="apartments-item__wrapper">
    <router-link
      :to="{ name: 'apartment', params: { id: apartment.id } }"
      class="apartments-item__link"
    >
      <img :src="apartment.imgUrl" class="apartments-item__img" />
      <div class="apartments-item__overlay">
        <p class="apartments-item__description">{{ apartment.descr }}</p>
        <StarRating :rating="apartment.rating" />
        <p>
          <span class="apartments-item__price">UAH {{ apartment.price }} </span>
          for the night
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from "../shared/StarRating.vue";
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
  name: "ApartmentsItem",
  props: {
    apartment: {
      type: Object,
      required: true,
    },
  },
  components: { StarRating },
};
</script>

<style lang="scss" scoped>
.apartments-item__wrapper {
  position: relative;
  height: 100%;
  overflow: hidden;
}

.apartments-item__link {
  height: 100%;
}
.apartments-item__img {
  height: 100%;
  object-fit: cover;
}
.apartments-item__overlay {
  position: absolute;
  padding: 20px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transform: translateY(100%);
  color: var(--main-light-cl);
  background-color: var(--bg-cl-opacity);
  transition: transform 250ms linear;
  .apartments-item__link:hover &,
  .apartments-item__link:focus & {
    transform: translateY(0);
  }
}
.apartments-item__description {
  max-height: 5em;
  overflow: hidden;
}
.apartments-item__price {
  font-size: 20px;
  font-weight: 700;
}
</style>
