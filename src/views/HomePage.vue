<template>
  <section class="home">
    <Container>
      <SearchApartment class="home__search" />
      <TitleVue class="home__title"> Chosen apartments </TitleVue>
      <ApartmentsList :apartments="filteredApartments" />
    </Container>
  </section>
</template>

<script>
import Container from "../components/shared/Container.vue";
import SearchApartment from "../components/SearchApartment.vue";
import ApartmentsList from "../components/apartments/ApartmentsList.vue";
import TitleVue from "../components/shared/Title.vue";

import { getApartments } from "../services/apartments";

export default {
  name: "HomePage",
  components: { Container, SearchApartment, ApartmentsList, TitleVue },
  data() {
    return {
      apartments: [],
    };
  },
  computed: {
    filteredApartments() {
      return this.apartments;
    },
  },
  async mounted() {
    try {
      const apartments = await getApartments();
      this.apartments = apartments;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 60px;
  padding-bottom: 100px;
}
.home__search {
  margin-bottom: 40px;
}

.home__title {
  margin-bottom: 20px;
}
</style>
