<template>
  <modal
    v-if="cardActionsOpened"
    title="More Actions"
    @close="handleModalClose"
  >
    <template v-slot:fullBody>
      <div class="px-24x">
        <div class="py-24x flex items-center border-b border-gray-30">
          <i class="ci-list_plus text-gray-400 text-lxx w-24x"></i>
          <p class="text-gray-400 text-lm ml-19x">Add a new expense</p>
        </div>
        <div class="py-24x flex items-center border-b border-gray-30">
          <i class="ci-edit text-gray-400 text-lxx w-24x"></i>
          <p class="text-gray-400 text-lm ml-19x">Edit the expense form</p>
        </div>
        <div class="py-24x flex items-center border-b border-gray-30">
          <i class="ci-check_big text-gray-400 text-lxx w-24x"></i>
          <p class="text-gray-400 text-lm ml-19x">Send the form to approval</p>
        </div>
        <div class="py-24x flex items-center">
          <i class="ci-trash_full text-red-500 text-lxx w-24x"></i>
          <p class="text-red-500 text-lm ml-19x">Remove the form</p>
        </div>
      </div>
    </template>
  </modal>
</template>
<script>
import Modal from "../../Modal/Modal.vue";

export default {
  name: "CardActions",
  components: { Modal },
  props: {
    cardActionsOpened: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleModalClose() {
      this.$emit("closeActions");
    },
  },
};
</script>
