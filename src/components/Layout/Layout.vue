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
            <router-link
              to="/notifications"
              icon
              :class="`py-0 xtre-notify-icon ${isNotification ? 'active' : ''}`"
            >
              <img alt="Xtre" src="@/assets/images/bell.svg" />
            </router-link>
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
  data: () => ({
    isNotification: false,
  }),
  mounted() {
    setTimeout(() => {
      this.isNotification = true;
    }, 500);
  },
};
</script>
<style>
.xtre-notify-icon {
  position: relative;
}

.xtre-notify-icon:after {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  position: absolute;
  border-radius: 50%;
  top: 2px;
  right: 2px;
  background: #f9432b;
  transform: scale(0);
  transition: transform 300ms ease-in-out;
}

.xtre-notify-icon.active:after {
  transform: scale(1);
}
</style>
