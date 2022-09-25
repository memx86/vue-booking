<template>
  <section class="home">
    <Container>
      <SearchApartment />
    </Container>
  </section>
</template>

<script>
import Container from "../components/shared/Container.vue";
import SearchApartment from "../components/SearchApartment.vue";
export default {
  name: "HomePage",
  components: { Container, SearchApartment },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 60px;
}
</style>
