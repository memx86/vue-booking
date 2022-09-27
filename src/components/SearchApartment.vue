<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <div class="search-from__wrapper">
      <CustomSelect
        v-model="formData.city"
        :options="options"
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
    options() {
      return [
        { value: "Test city1 value", label: "Test city1" },
        { value: "Test city2 value", label: "Test city2" },
        { value: "Test city3 value", label: "Test city3" },
        { value: "Test city4 value", label: "Test city4" },
      ];
    },
    isValid() {
      return this.formData.minPrice.isValid && !!this.formData.city.value;
    },
  },
  methods: {
    handleSubmit() {
      console.log(this.formData);
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
