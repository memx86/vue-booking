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
        />
        <CustomInput type="text" v-model="formData.email" label="Email" />
        <CustomInput
          type="password"
          v-model="formData.password"
          label="Password"
        />
        <CustomInput
          v-if="register"
          type="password"
          v-model="formData.confirmPassword"
          label="Confirm password"
        />
        <ButtonVue type="submit" class="auth__btn">{{ title }}</ButtonVue>
      </form>
    </div>
  </section>
</template>

<script>
import CustomInput from "./shared/CustomInput.vue";
import ButtonVue from "./shared/Button.vue";

const initialStateLogin = {
  email: "",
  password: "",
};
const initialStateRegister = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
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
  gap: 30px;
}
.auth__btn {
  margin-top: 20px;
}
</style>
