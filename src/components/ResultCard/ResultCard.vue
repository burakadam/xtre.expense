<template>
  <div class="flex flex-col justify-center items-center">
    <div
      :class="`w-96x h-96x rounded-full flex justify-center items-center my-16x ${color}`"
    >
      <i :class="`text-icon ${icon}`"> </i>
    </div>
    <div class="mb-16x">
      <h4 class="text-lx text-black text-center mb-16x">{{ title }}</h4>
      <p class="text-center text-gray-300 px-20x">{{ subTitle }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ResultCard",
  props: {
    color: { type: String, default: "" },
    icon: { type: String, default: "" },
    title: { type: String, default: "" },
    subTitle: { type: String, default: "" },
  },
};
</script>
