<template>
  <div>
    <div
      class="h-48x px-16x border border-gray-100 rounded-sx flex justify-between items-center"
    >
      <p class="mb-0">{{ placeHolder }}</p>
      <i class="ci-chevron_big_down text-lxm"></i>
    </div>
    <modal
      v-show="isSelectModalOpen"
      @close="closeSelectModal"
      :title="placeHolder"
      id="id-select"
    >
      <template v-slot:body> adasa asda </template>
    </modal>
  </div>
</template>
<script>
import Modal from "../../Modal/Modal.vue";
export default {
  components: { Modal },
  name: "SelectBox",
  props: {
    placeHolder: {
      type: String,
      default: "WBS or Client ID",
    },
  },
  data: () => ({
    isSelectModalOpen: true,
  }),
  methods: {
    closeSelectModal() {
      this.isSelectModalOpen = false;
    },
    openSelectModal() {
      this.isSelectModalOpen = true;
    },
  },
};
</script>
