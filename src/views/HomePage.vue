<template>
  <FullScreenLoader v-if="isLoading" />
  <section class="home">
    <Container>
      <SearchApartment
        :onSubmit="setSearchparams"
        :cities="cities"
        class="home__search"
      />
      <TitleVue class="home__title"> Chosen apartments </TitleVue>
      <ApartmentsList
        v-if="!!filteredApartments.length"
        :apartments="filteredApartments"
      />
      <p v-if="!filteredApartments.length && !isLoading">No apartments found</p>
    </Container>
  </section>
</template>

<script>
import { useToast } from "vue-toastification";
import Container from "../components/shared/Container.vue";
import SearchApartment from "../components/SearchApartment.vue";
import ApartmentsList from "../components/apartments/ApartmentsList.vue";
import TitleVue from "../components/shared/Title.vue";
import FullScreenLoader from "../components/shared/loaders/FullScreenLoader.vue";

import { getApartments } from "../services/apartments";
import { getCities } from "../services/cities";
import prepareOptions from "../helpers/prepareOptions";

export default {
  name: "HomePage",
  components: {
    Container,
    SearchApartment,
    ApartmentsList,
    TitleVue,
    FullScreenLoader,
  },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      apartments: [],
      cities: [],
      searchParams: {
        city: "",
        minPrice: null,
      },
      isLoading: false,
    };
  },
  computed: {
    filteredApartments() {
      if (!this.searchParams.city && this.searchParams.minPrice === null)
        return this.apartments;

      return this.apartments.filter(
        (apartment) =>
          apartment.location.city === this.searchParams.city &&
          apartment.price >= this.searchParams.minPrice
      );
    },
  },
  methods: {
    setSearchparams(value) {
      this.searchParams = value;
    },
  },
  async created() {
    try {
      this.isLoading = true;
      const apartments = await getApartments();
      const cities = await getCities();
      this.apartments = apartments;
      this.cities = prepareOptions(cities);
    } catch (error) {
      this.toast.error("Can't get apartments from server");
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/mixin";
.home {
  padding-top: 30px;
  padding-bottom: 50px;

  @include mq(tablet) {
    padding-top: 60px;
    padding-bottom: 100px;
  }
}
.home__search {
  margin-bottom: 20px;

  @include mq(tablet) {
    margin-bottom: 40px;
  }
}

.home__title {
  margin-bottom: 10px;

  @include mq(tablet) {
    margin-bottom: 20px;
  }
}
</style>
