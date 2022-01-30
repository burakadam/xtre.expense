<template>
  <div
    class="flex justify-between items-center py-16x border-b border-gray-100"
  >
    <label :for="$id('field2')" class="text-black text-lm">{{ name }}</label>
    <input
      type="checkbox"
      :id="$id('field2')"
      name="vehicle1"
      value="Bike"
      class="h-24x w-24x"
    />
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data: () => ({}),
};
</script>
