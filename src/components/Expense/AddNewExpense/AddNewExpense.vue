<template>
  <modal
    v-if="isNewExpenseOpened"
    title="Add a new Expense"
    @close="handleNewModalClose"
  >
    <template v-slot:header>
      <button text class="underline text-blue-500" @click="handleSaveButton">
        Save
      </button>
    </template>
    <template v-slot:fullBody>
      <div class="px-24x" v-if="addExpenseStep === 0">
        <div class="mt-16x">
          <p class="text-black">Expense Images</p>
          <file-loader />
        </div>
        <div>
          <p class="text-black">Expense details</p>
          <v-text-field
            label="Company name"
            outlined
            class="rounded-ss mt-16x"
          ></v-text-field>
        </div>
        <div class="my-16x">
          <v-select
            :items="categories"
            label="Category"
            class="rounded-ss"
            outlined
          ></v-select>
        </div>
        <div class="my-16x">
          <v-text-field
            label="Date picker will be added"
            outlined
            class="rounded-ss mt-16x"
          ></v-text-field>
        </div>
        <div class="my-16x">
          <v-text-field
            label="Amount (inc VAT)"
            outlined
            class="rounded-ss mt-16x"
          ></v-text-field>
        </div>
        <div class="my-16x">
          <v-text-field
            label="KDV Rate"
            outlined
            class="rounded-ss mt-16x"
          ></v-text-field>
        </div>
        <div class="my-16x">
          <v-select
            :items="currencies"
            label="Currency Type"
            class="rounded-ss"
            outlined
          ></v-select>
        </div>
        <div class="my-16x">
          <v-text-field
            label="Description"
            outlined
            class="rounded-ss mt-16x"
          ></v-text-field>
        </div>
        <div class="my-16x">
          <v-checkbox v-model="customerCheckbox">
            <template v-slot:label>
              This expense is going to be invoiced to the customer.
            </template>
          </v-checkbox>
        </div>
      </div>
      <div class="px-24x" v-if="addExpenseStep === 1">
        <result-card
          title="You are about to send your request to Guray Mert's approval"
          subTitle="If you still want to submit your form, after your action, you will not edit the form or add another expense anymore."
          color="bg-yellow-300"
          icon="ci-error_outline"
        />
        <div class="mt-40x">
          <v-btn
            color="primary"
            class="w-full border-2 border-blue-500 mb-24x"
            outlined
            @click="handleApprove"
          >
            Yes, I am sure send it to approval
          </v-btn>
          <v-btn color="primary" class="w-full" @click="handleReturnForm">
            Add an another expense
          </v-btn>
        </div>
      </div>
      <div class="px-24x" v-if="addExpenseStep === 2">
        <result-card
          title="Your expense is successfully created."
          subTitle="You can submit another expense for this project. If you have finished submitting all of your costs, you can send this form to the manager's approval."
          color="bg-green-100"
          icon="ci-check_bold"
        />
        <div class="mt-40x">
          <v-btn
            color="primary"
            class="w-full border-2 border-blue-500 mb-24x"
            outlined
            @click="sendToManager"
          >
            Send to Manager’s Approval
          </v-btn>
          <v-btn color="primary" class="w-full" @click="handleReturnForm">
            Add an another expense
          </v-btn>
        </div>
      </div>
    </template>
  </modal>
</template>
<script>
import FileLoader from "../../FileLoader/FileLoader.vue";
import Modal from "../../Modal/Modal.vue";
import ResultCard from "../../ResultCard/ResultCard.vue";

export default {
  name: "AddNewExpense",
  components: { Modal, FileLoader, ResultCard },
  props: {
    isNewExpenseOpened: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    categories: ["Restaurant", "Travel"],
    currencies: ["Turkish Lira", "Euro", "Dolar"],
    customerCheckbox: true,
    addExpenseStep: 0, // 0 - Form, 1 - About to send, 2 - Result
  }),
  methods: {
    handleNewModalClose() {
      this.$emit("handleNewExpenseModalClose");
    },
    handleSaveButton() {
      this.addExpenseStep = 1;
    },
    handleReturnForm() {
      this.addExpenseStep = 0;
    },
    handleApprove() {
      this.addExpenseStep = 2;
    },
    sendToManager() {
      this.$emit("handleNewExpenseModalClose");
    },
  },
};
</script>
