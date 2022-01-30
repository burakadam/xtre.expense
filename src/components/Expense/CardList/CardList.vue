<template>
  <div class="px-8x pt-24x">
    <card
      v-for="item in data"
      :key="item.id"
      :title="item.title"
      :subTitle="item.subTitle"
      :date="item.date"
      :price="item.price"
      :statue="item.statue"
    />
    <div class="my-24x">
      <v-pagination v-model="page" :length="3" :value="1"></v-pagination>
    </div>
    <div class="text-center">
      <p class="text-gray-50">
        you are viewing <span class="text-gray-400">5</span> items
      </p>
    </div>
  </div>
</template>
<script>
import Card from "../Card/Card.vue";
export default {
  components: { Card },
  name: "CardList",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    page: 1,
  }),
};
</script>
