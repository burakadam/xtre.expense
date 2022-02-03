<template>
  <v-app light>
    <div
      class="min-h-screen min-w-screen p-16x bg-purple-500 flex justify-center items-center"
    >
      <container class="w-full">
        <div class="mb-32x">
          <img
            alt="Xtre"
            class="h-24x w-auto"
            src="@/assets/images/xtre-logo.svg"
          />
        </div>
        <slot />
        <div class="border-t border-gray-30 pt-24x mt-24x text-center">
          <h2>
            New to Xtre?
            <router-link to="/" class="underline">Get started</router-link>
          </h2>
        </div>
      </container>
    </div>
  </v-app>
</template>
<script>
import Container from "../Container/Container.vue";

export default {
  components: { Container },
  name: "AuthLayout",
};
</script>
