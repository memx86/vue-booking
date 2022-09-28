<template>
  <article class="owner-info">
    <TitleVue level="2">Owner info</TitleVue>
    <ul class="owner-info__list">
      <li>Name: {{ owner.name }}</li>
      <li>Tel: {{ owner.phone }}</li>
      <li>E-mail: {{ owner.email }}</li>
    </ul>
  </article>
</template>

<script>
import TitleVue from "../shared/Title.vue";
export default {
  name: "OwnerInfo",
  components: { TitleVue },
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.owner-info {
  width: 350px;
  padding: 20px;
  background-color: var(--secondary-accent-cl);
}

.owner-info__list {
  margin-top: 20px;
}
</style>
