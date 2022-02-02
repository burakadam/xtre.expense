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
    <create-expense-form
      ref="newExpenseFormRef"
      @saveForm="addNewExpenseToTheList"
    />
    <!-- YENI EXPENSE MODALI -->
  </layout>
</template>

<script>
import CardList from "./components/Expense/CardList/CardList.vue";
import FiltersBar from "./components/FiltersBar/FiltersBar.vue";
import Layout from "./components/Layout/Layout.vue";

import CreateExpenseForm from "./containers/NewExpense/CreateExpenseForm.vue";

export default {
  name: "App",
  components: {
    Layout,
    FiltersBar,
    CardList,
    CreateExpenseForm,
  },
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

    wbsOrClientList: ["WBS or Client ID", "Foo", "Bar"],
    wbsOrClientListModal: "WBS or Client ID",
  }),
  methods: {
    showNewFormModal() {
      this.$refs.newExpenseFormRef.showNewFormModal();
    },
    addNewExpenseToTheList() {
      //DUMMY DATA
      const dummy = {
        id: 10,
        title: "Is Bankasi",
        subTitle: "GMER2022010002",
        date: "18.01.2022",
        price: "0,00 TL",
        statue: "draft",
      };
      this.data = [dummy, ...this.data];
    },
  },
};
</script>
