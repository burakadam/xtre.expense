<template>
  <v-app light>
    <div class="min-h-screen min-w-screen p-16x bg-purple-500">
      <Container class="py-24x">
        <header
          class="flex items-center justify-between mb-24x pb-24x border-b border-gray-100"
        >
          <div class="flex items-center">
            <img alt="menu" src="@/assets/images/hamburger.svg" />
            <img
              alt="Xtre"
              class="h-24x w-auto ml-16x"
              src="@/assets/images/xtre-logo.svg"
            />
          </div>
          <div class="flex items-center">
            <v-btn icon class="py-0">
              <img alt="Xtre" src="@/assets/images/settings.svg" />
            </v-btn>
            <v-btn icon class="py-0">
              <img alt="Xtre" src="@/assets/images/bell.svg" />
            </v-btn>
          </div>
        </header>
        <slot name="header-slot" />
      </Container>
      <Container :isPadding="false">
        <slot />
      </Container>
    </div>
  </v-app>
</template>
<script>
import Container from "../Container/Container.vue";
export default {
  name: "Layout",
  components: { Container },
};
</script>
