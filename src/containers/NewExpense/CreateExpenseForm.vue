<template>
  <modal
    v-if="newFormModal"
    @close="closeNewFormModal"
    title="Create a new Form"
  >
    <template v-slot:header>
      <button text class="underline text-blue-500" @click="onSave">
        Save Form
      </button>
    </template>
    <template v-slot:fullBody>
      <div class="px-24x">
        <div class="mb-16x">
          <select-box
            :options="wbsOptions"
            :isMulti="false"
            :isSearchable="true"
          />
        </div>
        <div class="mb-16x">
          <v-text-field
            label="Expense Form ID"
            disabled
            value="GMER2939040520031"
            persistent-hint
            outlined
          ></v-text-field>
        </div>
        <div class="mb-16x">
          <v-text-field
            label="Description"
            persistent-hint
            outlined
            :error="isDescriptionValidation"
            @change="handleChange"
          ></v-text-field>
        </div>
      </div>
    </template>
  </modal>
</template>
<script>
import SelectBox from "../../components/Form/SelectBox/SelectBox.vue";
import Modal from "../../components/Modal/Modal.vue";

export default {
  components: { Modal, SelectBox },

  data: () => ({
    newFormModal: false,
    isDescriptionValidation: false,
    descriptionValue: "",
    wbsOptions: [
      {
        id: 1,
        title: "Is Bankasi Kitchen",
        subtitle: "WBS-0394949288282-Nisantasi",
      },
      {
        id: 2,
        title: "Is Bankasi Web",
        subtitle: "WBS-0394949288282-Nisantasi",
      },
      {
        id: 3,
        title: "Is Bankasi Home",
        subtitle: "WBS-0394949288282-Nisantasi",
      },
      {
        id: 4,
        title: "Is Bankasi Car",
        subtitle: "WBS-0394949288282-Nisantasi",
      },
      {
        id: 5,
        title: "Is Bankasi Home",
        subtitle: "WBS-0394949288282-Nisantasi",
      },
      {
        id: 6,
        title: "Is Bankasi Car",
        subtitle: "WBS-0394949288282-Nisantasi",
      },
      {
        id: 7,
        title: "Is Bankasi Home",
        subtitle: "WBS-0394949288282-Nisantasi",
      },
      {
        id: 8,
        title: "Is Bankasi Car",
        subtitle: "WBS-0394949288282-Nisantasi",
      },
    ],
  }),
  methods: {
    showNewFormModal() {
      this.newFormModal = true;
    },
    closeNewFormModal() {
      this.newFormModal = false;
    },
    handleChange(e) {
      this.descriptionValue = e;
      this.isDescriptionValidation = e.length < 1;
    },
    onSave() {
      //DUMMY VALIDATION TO SHOW ERROR STYLES
      if (this.descriptionValue.length < 1) {
        this.isDescriptionValidation = true;
        return;
      }
      this.isDescriptionValidation = false;
      this.$emit("saveForm");
      this.newFormModal = false;
    },
  },
};
</script>
