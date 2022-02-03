<template>
  <auth-layout>
    <div class="mb-16x">
      <v-text-field label="E-mail" persistent-hint outlined></v-text-field>
    </div>
    <div class="mb-16x">
      <v-text-field
        v-model="password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        label="Password"
        @click:append="showPassword = !showPassword"
        outlined
      ></v-text-field>
    </div>
    <v-btn color="primary" block class="mt-32x">Login</v-btn>
    <v-btn text block class="mt-16x underline" color="primary"
      >Forgot password?
    </v-btn>
  </auth-layout>
</template>
<script>
import AuthLayout from "./components/Layout/AuthLayout.vue";
export default {
  components: { AuthLayout },
  data: () => ({
    password: "",
    showPassword: false,
  }),
};
</script>
