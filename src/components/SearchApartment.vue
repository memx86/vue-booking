<template>
  <form class="search-form" @submit.prevent="handleSubmit">
    <div class="search-form__wrapper">
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
    <CustomButton :disabled="!isValid" class="search-form__btn"
      >Find apartment</CustomButton
    >
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
@import "../assets/styles/mixin";
.search-form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include mq(tablet) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.search-form__wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @include mq(tablet) {
    flex-direction: row;
    gap: 10px;
  }

  @include mq(desktop) {
    flex-direction: row;
    gap: 30px;
  }
}

.search-form__btn {
  @include mq(tablet) {
    min-width: 200px;
  }
}
</style>
