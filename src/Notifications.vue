<template>
  <layout>
    <template v-slot:header-slot>
      <div class="flex items-center justify-between">
        <h2 class="text-lxx">Notifications</h2>
        <div
          class="bg-red-500 text-white w-24x h-24x rounded-full flex justify-center items-center"
        >
          <p>4</p>
        </div>
      </div>
    </template>
    <div>
      <notification-list :data="data" />
    </div>
    <div class="my-24x">
      <v-pagination v-model="page" :length="3" :value="1"></v-pagination>
    </div>
    <div class="text-center">
      <p class="text-gray-50">
        you are viewing <span class="text-gray-400">5</span> items
      </p>
    </div>
  </layout>
</template>
<script>
import Layout from "./components/Layout/Layout.vue";
import NotificationList from "./components/NotificationList/Notification/NotificationList.vue";

export default {
  components: { Layout, NotificationList },
  data: () => ({
    page: 1,
    data: [
      {
        id: "GMER2022010002",
        nameSurname: "Ayse Demir",
        owner: "Ayse Demir",
        date: "10.01.2022",
      },
      {
        id: "GMER20220100023",
        nameSurname: "Burak Erden",
        owner: "Ayse Demir",
        date: "10.01.2022",
      },
      {
        id: "GMER2022010004",
        nameSurname: "Şahin Erden",
        owner: "Ayse Demir",
        date: "10.01.2022",
      },
      {
        id: "GMER2022010005",
        nameSurname: "Burak Şahin Erden",
        owner: "Ayse Demir",
        date: "10.01.2022",
      },
    ],
  }),
};
</script>
