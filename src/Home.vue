<template>
  <layout>
    <template v-slot:header-slot>
      <div class="flex items-center justify-between">
        <h1 class="text-lxx font-medium">Expenses</h1>
        <v-btn small color="primary" @click="showNewFormModal"
          >Create a new form</v-btn
        >
      </div>
    </template>
    <!-- EXPENSE TABLARI -->
    <div class="px-10x pb-16x border-b border-gray-100">
      <v-tabs v-model="tab">
        <v-tab class="font-medium">Expense Forms</v-tab>
        <v-tab class="flex-1">
          <v-badge color="error" content="4" class="font-medium"
            >Pending Requests</v-badge
          >
        </v-tab>
      </v-tabs>
    </div>
    <!-- EXPENSE TABLARI -->
    <!-- FİLTRE BUTONLARI BARI -->
    <FiltersBar @loaderEvent="handleLoading" />
    <!-- FİLTRE BUTONLARI BARI -->
    <!-- TAB İÇERİKLERİ -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <card-list :data="filteredData" :isDataLoading="isDataLoading" />
      </v-tab-item>
      <v-tab-item>
        <card-list
          :data="filteredData"
          :isDataLoading="isDataLoading"
          :filterTags="filterTags"
        />
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

const dummyData = [
  {
    id: 1,
    title: "Is Bankasi",
    subTitle: "GMER2022010002",
    date: "18.01.2022",
    price: "2.450,00 TL",
    statue: "pending",
    owner: "Guray",
    expenses: [
      {
        id: 11,
        title: "Opet",
        date: "18.01.2022",
        price: "260,00TL",
        type: "Akaryakıt",
      },
      {
        id: 12,
        title: "Rixos Bomonti",
        date: "18.01.2022",
        price: "1.250,00TL",
        type: "Konaklama",
      },
      {
        id: 13,
        title: "Taxi",
        date: "18.01.2022",
        price: "90,00TL",
        type: "Ulaşım",
      },
    ],
  },
  {
    id: 2,
    title: "Ak Bankasi",
    subTitle: "GMER2022010002",
    date: "18.01.2022",
    price: "2.450,00 TL",
    statue: "approved",
    owner: "Guray",
  },
  {
    id: 3,
    title: "Şeker Bankasi",
    subTitle: "GMER2022010002",
    date: "18.01.2022",
    price: "2.450,00 TL",
    statue: "approved",
    owner: "Guray",
  },
  {
    id: 4,
    title: "Halk Bankasi",
    subTitle: "GMER2022010002",
    date: "18.01.2022",
    price: "2.450,00 TL",
    statue: "rejected",
    owner: "Guray",
  },
  {
    id: 5,
    title: "Demir Bankasi",
    subTitle: "GMER2022010002",
    date: "18.01.2022",
    price: "2.450,00 TL",
    statue: "rejected",
    owner: "Guray",
  },
];

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
    filteredData: dummyData,
    wbsOrClientList: ["WBS or Client ID", "Foo", "Bar"],
    wbsOrClientListModal: "WBS or Client ID",
    isDataLoading: false,
    searchValue: "",
    filterTags: [
      "Yapi Kredi, Is Bank",
      "Request owner",
      "Yapi Kredi, Is Bank",
      "Request owner",
    ],
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
        owner: "Guray",
        newAlertOn: true,
      };
      this.filteredData = [dummy, ...this.filteredData];
    },
    handleLoading(e) {
      this.isDataLoading = e.loading;
      this.searchValue = e.value;

      setTimeout(() => {
        const result = dummyData.filter(
          (item) => item.title.toLowerCase().indexOf(this.searchValue) > -1
        );
        this.filteredData = result;
      }, 1000);
    },
  },
};
</script>
