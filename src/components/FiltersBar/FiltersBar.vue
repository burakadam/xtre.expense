<template>
  <div
    class="bg-gray-10 p-8x flex items-center justif-between border-b border-gray-100"
  >
    <div>
      <v-text-field
        label="Search"
        append-icon="mdi-magnify"
        persistent-hint
        outlined
        class="small"
      ></v-text-field>
    </div>
    <div class="mx-8x">
      <v-btn
        small
        outlined
        class="justify-between bg-white w-111x"
        @click="showSortModal"
        >Sort<i class="ci-text_align_left"></i>
      </v-btn>
    </div>
    <div>
      <v-btn small outlined class="bg-white" @click="showFilterModal"
        ><i class="ci-filter_outline"></i>
      </v-btn>
    </div>
    <!-- FİLTRE MODALI -->
    <modal
      v-show="isFilterModalVisibile"
      @close="closeFilterModal"
      title="Filter By"
    >
      <template v-slot:header>
        <button text class="underline text-blue-500">Filter Now</button>
      </template>
      <template v-slot:body>
        <p class="text-sm text-gray-50 mb-0">FILTER BY STATUS</p>
        <div class="mb-16x">
          <CheckBox v-for="item in checks" :key="item.id" :name="item.text" />
        </div>
        <p class="text-sm text-gray-50 mb-16x">FILTER BY FORM DETAILS</p>
        <div class="mb-16x">
          <v-select :items="items" label="Client" outlined></v-select>
        </div>
        <div class="mb-16x">
          <v-select :items="years" label="Year" outlined></v-select>
        </div>
      </template>
    </modal>
    <!-- FİLTRE MODALI -->
    <!-- SORT MODALI -->
    <modal v-show="isSortModalVisibile" @close="closeSortModal" title="Sort By">
      <template v-slot:body>
        <v-radio-group v-model="radioGroup">
          <v-radio
            v-for="item in sorts"
            :key="item"
            :label="item"
            :value="item"
          ></v-radio>
        </v-radio-group>
      </template>
    </modal>
    <!-- SORT MODALI -->
  </div>
</template>
<script>
import Modal from "../Modal/Modal.vue";
import CheckBox from "../../components/Form/CheckBox/CheckBox.vue";

export default {
  name: "FiltersBar",
  components: { Modal, CheckBox },
  data: () => ({
    search: "",
    isFilterModalVisibile: false,
    isSortModalVisibile: false,
    radioGroup: 1,
    checks: [
      {
        id: 1,
        text: "Approved",
      },
      {
        id: 2,
        text: "Rejected",
      },
      {
        id: 3,
        text: "Pending Approval",
      },
      {
        id: 4,
        text: "Draft",
      },
    ],
    items: ["All", "Foo", "Bar", "Fizz", "Buzz"],
    years: ["All", "2022", "2021", "2020", "2019"],
    sorts: [
      "Created (Newest First)",
      "Created (Oldest First)",
      "Client A-Z",
      "Client Z-A",
      "Expense Forms (Highest First)",
      "Expense Forms (Lowest First)",
    ],
  }),
  methods: {
    showFilterModal() {
      this.isFilterModalVisibile = true;
    },
    closeFilterModal() {
      this.isFilterModalVisibile = false;
    },
    showSortModal() {
      this.isSortModalVisibile = true;
    },
    closeSortModal() {
      this.isSortModalVisibile = false;
    },
  },
};
</script>
