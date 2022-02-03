<template>
  <div>
    <modal
      v-if="isCardDetailOpen"
      :title="titles[expenseDetailSteps]"
      @close="handleModalClose"
    >
      <template v-slot:header v-if="expenseDetailSteps === 2">
        <button text class="underline text-blue-500" @click="sendRejectMessage">
          Send
        </button>
      </template>
      <template v-slot:fullBody>
        <!-- EXPENSE DETAIL -->
        <div v-if="expenseDetailSteps === 0">
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
        </div>
        <!-- EXPENSE DETAIL -->
        <!-- EXPENSE APPROVED -->
        <div v-if="expenseDetailSteps === 1" class="px-24x">
          <result-card
            title="The expense request is succesfully approved"
            subTitle="You can also review other requests and take action."
            color="bg-green-100"
            icon="ci-check_bold"
          />
          <div class="mt-40x">
            <v-btn
              color="primary"
              class="w-full border-2 border-blue-500 mb-24x"
              outlined
              @click="goToDashboard"
            >
              Go to dashboard
            </v-btn>
            <v-btn color="primary" class="w-full" @click="handleOthers">
              Add an another expense
            </v-btn>
          </div>
        </div>
        <!-- EXPENSE APPROVED -->
        <!-- EXPENSE REJECTED -->
        <div v-if="expenseDetailSteps === 2">
          <div class="px-24x" v-if="rejectSteps === 0">
            <v-text-field
              label="Description"
              persistent-hint
              outlined
            ></v-text-field>
          </div>
          <div v-else class="px-24x">
            <result-card
              title="The expense request is rejected"
              subTitle="You can also review other requests and take action."
              icon="ci-close_big"
              color="bg-red-100"
            />
            <div class="mt-40x">
              <v-btn
                color="primary"
                class="w-full border-2 border-blue-500 mb-24x"
                outlined
                @click="goToDashboard"
              >
                Go to dashboard
              </v-btn>
              <v-btn color="primary" class="w-full" @click="handleOthers">
                Add an another expense
              </v-btn>
            </div>
          </div>
        </div>
        <!-- EXPENSE REJECTED -->
      </template>
      <template v-slot:footer v-if="expenseDetailSteps === 0">
        <div class="px-20x py-24x shadow-smt" v-if="expenses.length < 1">
          <v-btn color="primary" class="w-full" @click="handeNewExpenseOpen">
            Add new expense
          </v-btn>
        </div>
        <div v-else class="card-detail-buttons flex p-24x items-center">
          <v-btn
            outlined
            color="error"
            class="border-red-500 border-2 box-border flex-1 mr-12x"
            @click="handleREject"
          >
            Reject
          </v-btn>
          <v-btn color="primary" class="flex-1" @click="handleApprove">
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
      expenseDetailSteps: 0,
      rejectSteps: 0,
      titles: [
        "Expense Form Details",
        "Transaction Detail",
        "Please add a reject reason",
      ],
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
    handleApprove() {
      this.expenseDetailSteps = 1;
    },
    handleREject() {
      this.expenseDetailSteps = 2;
    },
    handleOthers() {
      this.expenseDetailSteps = 0;
    },
    goToDashboard() {
      this.$emit("closeDetail");
    },
    sendRejectMessage() {
      this.rejectSteps = 1;
    },
  },
};
</script>

<style scoped>
.card-detail-buttons button {
  height: 48px !important;
}
</style>
