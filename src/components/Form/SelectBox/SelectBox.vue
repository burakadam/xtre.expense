<template>
  <div>
    <div
      class="h-48x px-16x border border-gray-100 rounded-sx flex justify-between items-center"
      @click="openSelectModal"
    >
      <p class="mb-0">{{ placeHolder }}</p>
      <i class="ci-chevron_big_down text-lxm"></i>
    </div>
    <modal
      v-if="isSelectModalOpen"
      @close="closeSelectModal"
      :title="placeHolder"
      id="id-select"
    >
      <template v-slot:fullBody>
        <div class="px-24x">
          <div v-if="isSearchable">
            <v-text-field
              label="Search"
              append-icon="ci-search"
              persistent-hint
              outlined
              @keydown="handleInputKeydown"
            ></v-text-field>
          </div>
          <p v-if="subTitle" class="text-sm text-gray-50">{{ subTitle }}</p>
          <div v-if="isMulti">
            <check-box
              v-for="item in filteredOptions"
              :key="item.id"
              :name="item.title"
            />
          </div>
          <v-radio-group v-model="radioGroup" v-else>
            <v-radio
              v-for="item in filteredOptions"
              :key="item.id"
              :value="item.id"
            >
              <template v-slot:label>
                <div class="flex flex-col">
                  <p class="text-lm mb-16x">{{ item.title }}</p>
                  <span class="text-sm text-gray-50">{{ item.subtitle }}</span>
                </div>
              </template>
            </v-radio>
          </v-radio-group>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import Modal from "../../Modal/Modal.vue";
import CheckBox from "../CheckBox/CheckBox.vue";
export default {
  components: { Modal, CheckBox },
  name: "SelectBox",
  props: {
    placeHolder: {
      type: String,
      default: "WBS or Client ID",
    },
    options: {
      type: Array,
      require: true,
      default: () => [],
    },
    isSearchable: {
      type: Boolean,
      default: false,
    },
    isMulti: {
      type: Boolean,
      default: true,
    },
    subTitle: {
      type: String,
      default: null,
    },
  },
  data: function () {
    return {
      radioGroup: 0,
      isSelectModalOpen: false,
      filteredOptions: this.options,
    };
  },
  methods: {
    closeSelectModal() {
      this.isSelectModalOpen = false;
    },
    openSelectModal() {
      this.isSelectModalOpen = true;
    },
    handleInputKeydown(e) {
      const result = this.options.filter(
        (item) => item.title.toLowerCase().indexOf(e.target.value) > -1
      );
      this.filteredOptions = result;
      console.log(e.target.value);
    },
  },
};
</script>
