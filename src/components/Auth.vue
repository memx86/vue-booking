<template>
  <section class="auth" :class="register && 'auth--faded'">
    <div class="auth__wrapper">
      <h1 class="auth__title">{{ title }}</h1>
      <form @submit.prevent="handleSubmit" class="auth__form">
        <CustomInput
          v-if="register"
          type="text"
          v-model="formData.name"
          label="Name"
          :rules="[rules.required(), rules.max(12)]"
          placeholder="asdasd"
        />
        <CustomInput
          type="text"
          v-model="formData.email"
          label="Email"
          :rules="[rules.required(), rules.email()]"
        />
        <CustomInput
          type="password"
          v-model="formData.password"
          label="Password"
          :rules="[rules.required(), rules.max(16)]"
        />
        <CustomInput
          v-if="register"
          type="password"
          v-model="formData.confirmPassword"
          label="Confirm password"
          :rules="[rules.required(), rules.max(16)]"
          :error="
            formData.password.value !== formData.confirmPassword.value
              ? 'passwords must match'
              : ''
          "
        />
        <ButtonVue type="submit" :disabled="!isValid" class="auth__btn">{{
          title
        }}</ButtonVue>
      </form>
    </div>
  </section>
</template>

<script>
import CustomInput from "./shared/CustomInput.vue";
import ButtonVue from "./shared/Button.vue";

import { required, email, max } from "../validation";

const initialFieldValue = {
  value: "",
  isValid: false,
};

const initialStateLogin = {
  email: { ...initialFieldValue },
  password: { ...initialFieldValue },
};
const initialStateRegister = {
  ...initialStateLogin,
  name: { ...initialFieldValue },
  confirmPassword: { ...initialFieldValue },
};

export default {
  name: "AuthComponent",
  components: { CustomInput, ButtonVue },
  props: {
    register: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formData: this.register
        ? { ...initialStateRegister }
        : { ...initialStateLogin },
    };
  },
  computed: {
    title() {
      return this.register ? "Register" : "Log in";
    },
    rules() {
      return {
        required,
        email,
        max,
      };
    },
    isValid() {
      if (this.register) {
        const isPasswordsMatch =
          this.formData.password.value === this.formData.confirmPassword.value;
        if (!isPasswordsMatch) return false;
      }

      const result = Object.values(this.formData)
        .map((field) => field.isValid)
        .reduce((acc, value) => acc && value, true);
      return result;
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
.auth {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../assets/images/bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &--faded {
    background-image: linear-gradient(
        var(--bg-cl-opacity),
        var(--bg-cl-opacity)
      ),
      url("../assets/images/bg.jpg");
  }
}
.auth__wrapper {
  min-width: 410px;
  padding: 32px;
  background-color: var(--main-light-cl);
}
.auth__title {
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}
.auth__form {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.auth__btn {
  margin-top: 20px;
}
</style>
