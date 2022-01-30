<template>
  <div
    :class="`bg-white rounded-smb py-16x shadow-sm mb-8x ${
      isPadding && 'px-16x'
    }`"
  >
    <slot />
  </div>
</template>
<script>
export default {
  name: "Container",
  props: {
    isPadding: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
