<template>
  <div class="px-8x pt-24x">
    <div
      v-if="isDataLoading"
      class="bg-blue-50 rounded-sx px-16x py-12x flex justify-between items-center mb-16x"
    >
      <p class="text-blue-300 text-md">Loading Expense Forms</p>
      <svg
        class="animate-spin -ml-1 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="#0037FF"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="#2D84D5"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div
      class="bg-red-100 rounded-sx px-16x py-12x flex justify-between items-center mb-16x"
    >
      <span class="text-red-500">The form that you choosed is removed</span>
      <i class="ci-trash_full text-red-500 text-lxm"></i>
    </div>
    <div v-if="filters.length > 0">
      <scroller>
        <div
          class="bg-gray-30 h-29x px-8x py-4x mr-8x rounded-smb flex items-center"
          v-for="(item, index) in filters"
          :key="index"
          @click="() => removeFilterItem(index)"
        >
          <p>{{ item }}</p>
          <p class="ml-8x">
            <i class="ci-close_big text-lm"></i>
          </p>
        </div>
      </scroller>
    </div>
    <div v-if="data.length > 0">
      <card
        v-for="item in data"
        :key="item.id"
        :title="item.title"
        :subTitle="item.subTitle"
        :date="item.date"
        :price="item.price"
        :statue="item.statue"
        :newAlertOn="item.newAlertOn"
        :data="item"
      />
      <div class="my-24x">
        <v-pagination v-model="page" :length="3" :value="1"></v-pagination>
      </div>
      <div class="text-center">
        <p class="text-gray-50">
          you are viewing <span class="text-gray-400 text-medium">5</span> items
        </p>
      </div>
    </div>
    <div v-else>
      <result-card
        title="No records found"
        subTitle="Try changing the filters or search term"
        icon="ci-search"
        color="bg-yellow-300"
      />
    </div>
  </div>
</template>
<script>
import ResultCard from "../../ResultCard/ResultCard.vue";
import Scroller from "../../Scroller/Scroller.vue";
import Card from "../Card/Card.vue";

export default {
  components: { Card, ResultCard, Scroller },

  name: "CardList",
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    isDataLoading: {
      type: Boolean,
      default: false,
    },
    filterTags: {
      type: Array,
      default: () => [],
    },
  },
  data: function () {
    return {
      page: 1,
      filteringTags: this.filterTags,
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
      },
      swiperSlides: [1, 2, 3, 4, 5],
      filters: this.filterTags,
    };
  },
  methods: {
    removeFilterItem(e) {
      this.filters = this.filters.filter((el, index) => index !== e);
    },
  },
};
</script>
