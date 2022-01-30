<template>
  <layout>
    <template v-slot:header-slot>
      <div class="flex items-center justify-between">
        <h1 class="text-lxx">Expenses</h1>
        <v-btn small color="primary" @click="showNewFormModal"
          >Create a new form</v-btn
        >
      </div>
    </template>
    <!-- EXPENSE TABLARI -->
    <div class="px-10x pb-16x border-b border-gray-100">
      <v-tabs v-model="tab">
        <v-tab>Expense Forms</v-tab>
        <v-tab class="flex-1">
          <v-badge color="error" content="4">Pending Requests</v-badge>
        </v-tab>
      </v-tabs>
    </div>
    <!-- EXPENSE TABLARI -->
    <!-- FİLTRE BUTONLARI BARI -->
    <FiltersBar />
    <!-- FİLTRE BUTONLARI BARI -->
    <!-- TAB İÇERİKLERİ -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <card-list :data="data" />
      </v-tab-item>
      <v-tab-item>
        <card-list :data="data" />
      </v-tab-item>
    </v-tabs-items>
    <!--TAB İÇERİKLERİ -->
    <!-- YENI EXPENSE MODALI -->
    <modal
      v-show="newFormModal"
      @close="closeNewFormModal"
      title="Create a new Form"
    >
      <template v-slot:header>
        <button text class="underline text-blue-500">Save Form</button>
      </template>
      <template v-slot:body>
        <div class="mb-16x">
          <select-box />
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
          ></v-text-field>
        </div>
      </template>
    </modal>
    <!-- YENI EXPENSE MODALI -->
  </layout>
</template>

<script>
import CardList from "./components/Expense/CardList/CardList.vue";
import FiltersBar from "./components/FiltersBar/FiltersBar.vue";
import SelectBox from "./components/Form/SelectBox/SelectBox.vue";
import Layout from "./components/Layout/Layout.vue";
import Modal from "./components/Modal/Modal.vue";

export default {
  name: "App",
  components: { Layout, FiltersBar, CardList, Modal, SelectBox },
  data: () => ({
    tab: null,
    data: [
      {
        id: 1,
        title: "Is Bankasi",
        subTitle: "GMER2022010002",
        date: "18.01.2022",
        price: "2.450,00 TL",
        statue: "pending",
      },
      {
        id: 2,
        title: "Is Bankasi",
        subTitle: "GMER2022010002",
        date: "18.01.2022",
        price: "2.450,00 TL",
        statue: "approved",
      },
      {
        id: 3,
        title: "Is Bankasi",
        subTitle: "GMER2022010002",
        date: "18.01.2022",
        price: "2.450,00 TL",
        statue: "approved",
      },
      {
        id: 4,
        title: "Is Bankasi",
        subTitle: "GMER2022010002",
        date: "18.01.2022",
        price: "2.450,00 TL",
        statue: "rejected",
      },
      {
        id: 5,
        title: "Is Bankasi",
        subTitle: "GMER2022010002",
        date: "18.01.2022",
        price: "2.450,00 TL",
        statue: "pending",
      },
    ],
    newFormModal: true,
    wbsOrClientList: ["WBS or Client ID", "Foo", "Bar"],
    wbsOrClientListModal: "WBS or Client ID",
  }),
  methods: {
    showNewFormModal() {
      this.newFormModal = true;
    },
    closeNewFormModal() {
      this.newFormModal = false;
    },
  },
};
</script>
