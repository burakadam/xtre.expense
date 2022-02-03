<template>
  <div>
    <div class="p-24x" v-for="item in data" :key="item.id">
      <p class="text-gray-50">{{ item.id }}</p>
      <h4 class="text-lm mt-8x mb-24x">{{ item.nameSurname }}</h4>
      <p>
        Owner: <span class="text-gray-50">{{ item.owner }}</span>
      </p>
      <p>
        Created on: <span class="text-gray-50">{{ item.date }}</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotificationList",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
