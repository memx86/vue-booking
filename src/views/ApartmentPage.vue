<template>
  <section class="apartment">
    <Container class="apartment__container">
      <ApartmentInfo :apartment="apartment" />
      <aside class="apartment__aside">
        <OwnerInfo :owner="apartment.owner" />
        <Reviews :apartment="apartment" />
      </aside>
    </Container>
  </section>
</template>

<script>
import Container from "../components/shared/Container.vue";
import ApartmentInfo from "../components/apartments/ApartmentInfo.vue";
import { getApartmentById } from "../services/apartments";
import OwnerInfo from "../components/apartments/OwnerInfo.vue";
import Reviews from "../components/apartments/reviews/Reviews.vue";

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
  name: "ApartmentPage",
  components: { Container, ApartmentInfo, OwnerInfo, Reviews },
  data() {
    return {
      apartment: {},
    };
  },
  async created() {
    try {
      const apartment = await getApartmentById(this.$route.params.id);
      this.apartment = apartment;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment {
  padding-top: 60px;
  padding-bottom: 70px;
}
.apartment__container {
  display: flex;
  gap: 30px;
}
.apartment__aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
