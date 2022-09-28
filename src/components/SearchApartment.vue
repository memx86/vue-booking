<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <div class="search-from__wrapper">
      <CustomSelect
        v-model="formData.city"
        :options="cities"
        placeholder="City"
      />
      <CustomInput
        v-model="formData.minPrice"
        label="Price starting from"
        type="text"
        :rules="[rules.required(), rules.number()]"
      />
    </div>
    <CustomButton :disabled="!isValid">Find apartment</CustomButton>
  </form>
</template>

<script>
import CustomInput from "./shared/CustomInput.vue";
import CustomButton from "./shared/CustomButton.vue";

import initialFieldValue from "../assets/constants/initialInputValue";
import { required, number } from "../validation";
import CustomSelect from "./shared/CustomSelect.vue";

const initialState = {
  city: { value: "", label: "" },
  minPrice: { ...initialFieldValue },
};

export default {
  name: "SearchApartment",
  components: { CustomInput, CustomButton, CustomSelect },
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    cities: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      formData: { ...initialState },
    };
  },
  computed: {
    rules() {
      return {
        required,
        number,
      };
    },
    isValid() {
      return this.formData.minPrice.isValid && !!this.formData.city.value;
    },
  },
  methods: {
    handleSubmit() {
      const { city, minPrice } = this.formData;
      this.onSubmit({
        city: city.value,
        minPrice: minPrice.value,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.search-form {
  display: flex;
  justify-content: space-between;
}

.search-from__wrapper {
  display: flex;
  gap: 30px;
}
</style>
