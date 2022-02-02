<template>
  <div>
    <modal
      v-if="isCardDetailOpen"
      title="Expense Form Details"
      @close="handleModalClose"
    >
      <template v-slot:fullBody>
        <div class="expense-card rounded-ss mb-24x px-20x relative">
          <h4 class="text-lm">{{ data.title }}</h4>
          <span class="text-gray-50">{{ data.subTitle }}</span>
          <p class="mt-16x">
            Owner: <span class="text-gray-50">{{ data.owner }}</span>
          </p>
          <p>
            Created on: <span class="text-gray-50">{{ data.date }}</span>
          </p>
          <div class="flex justify-between items-centers mt-24x">
            <div
              :class="`expense-card-statue ${statueTypes[data.statue].class}`"
            >
              <span class="text-sm">{{ statueTypes[data.statue].text }}</span>
            </div>
            <p class="mb-0 text-lx">{{ data.price }}</p>
          </div>
        </div>
        <filters-bar />
        <div class="px-24x">
          <div v-if="expenses.length > 0">
            <div
              v-for="expense in expenses"
              :key="expense.id"
              class="py-16x border-b border-gray-100 flex justify-between items-start"
            >
              <div>
                <p class="text-gray-400 text-lm">{{ expense.title }}</p>
                <p class="text-sm text-gray-50">{{ expense.date }}</p>
              </div>
              <div class="text-right">
                <p class="text-gray-400 text-lm">{{ expense.price }}</p>
                <p class="text-sm text-gray-50">{{ expense.type }}</p>
              </div>
            </div>
          </div>
          <result-card
            v-else
            icon="ci-file_new"
            color="bg-yellow-300"
            title="You don’t have any expense in this form."
            subTitle="Please start to add expenses to send to approval"
          />
        </div>
      </template>
      <template v-slot:footer>
        <div class="px-20x py-24x shadow-smt" v-if="expenses.length < 1">
          <v-btn color="primary" class="w-full" @click="handeNewExpenseOpen">
            Add new expense
          </v-btn>
        </div>
        <div v-else>
          <v-btn outlined color="error" class="border-red-500 border-2">
            Reject
          </v-btn>
          <v-btn color="primary" class="border-blue-500 border border-2">
            Approve
          </v-btn>
        </div>
      </template>
    </modal>
    <add-new-expense
      :isNewExpenseOpened="isNewExpenseOpened"
      @handleNewExpenseModalClose="handeNewExpenseClose"
    />
  </div>
</template>
<script>
import FiltersBar from "../../FiltersBar/FiltersBar.vue";
import Modal from "../../Modal/Modal.vue";
import ResultCard from "../../ResultCard/ResultCard.vue";
import AddNewExpense from "../AddNewExpense/AddNewExpense.vue";

export default {
  name: "CardDetail",
  components: { Modal, FiltersBar, ResultCard, AddNewExpense },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    statueTypes: {
      type: Object,
      default: () => {},
    },
    expenses: {
      type: Array,
      default: () => [],
    },
    isCardDetailOpen: {
      type: Boolean,
      default: true,
    },
  },
  data: function () {
    return {
      isNewExpenseOpened: false,
    };
  },
  methods: {
    handleModalOpen() {
      this.isCardDetailOpen = true;
    },
    handleModalClose() {
      this.$emit("closeDetail");
    },
    handeNewExpenseOpen() {
      this.isNewExpenseOpened = true;
    },

    handeNewExpenseClose() {
      this.isNewExpenseOpened = false;
    },
  },
};
</script>
