<template>
  <div class="relative">
    <button
      type="button"
      class="absolute top-0 right-0 p-0 z-50"
      @click="handleCardActionsOpen"
    >
      <i class="ci-more_horizontal text-lx"></i>
    </button>

    <div
      :class="`expense-card bg-gray-10 rounded-ss mb-16x p-24x relative ${statueTypes[statue].class}`"
      @click="handleDetailOpen"
    >
      <h4 class="text-lm">{{ title }}</h4>
      <span class="text-gray-50">{{ subTitle }}</span>
      <p class="mt-16x">
        Created on: <span class="text-gray-50">{{ date }}</span>
      </p>
      <div class="flex justify-between items-centers mt-16x">
        <div :class="`expense-card-statue ${statueTypes[statue].class}`">
          <span class="text-sm">{{ statueTypes[statue].text }}</span>
        </div>
        <p class="mb-0 text-lx">{{ price }}</p>
      </div>
    </div>
    <div
      v-if="isNewAlert"
      class="expense-card nofication bg-green-50 rounded-ss mb-16x px-24x pt-8x relative"
    >
      <h4 class="text-lm">Start to add your expenses</h4>
      <p class="text-sm mt-8x mb-8x">
        You just created an expense form group. Now, you can add your bills and
        other expenses which are related to this WBS group.
      </p>
      <button
        type="button"
        class="text-sm underline pl-0"
        @click="hideNewAlert"
      >
        Dismiss
      </button>
    </div>
    <card-detail
      :isCardDetailOpen="isCardDetailOpen"
      :data="data"
      :statueTypes="statueTypes"
      :expenses="data.expenses"
      @closeDetail="handleDetailClose"
    />
    <card-actions
      :cardActionsOpened="cardActionsOpened"
      @closeActions="handleCardActionsClose"
    />
  </div>
</template>
<script>
import CardDetail from "../CardDetail/CardDetail.vue";
import CardActions from "../CardActions/CardActions.vue";

export default {
  components: { CardDetail, CardActions },
  name: "card",
  props: {
    statue: {
      type: String,
      default: "pending",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    date: { type: String, default: "" },
    price: {
      type: String,
      default: "0 TL",
    },
    data: {
      type: Object,
      default: () => {},
    },
    newAlertOn: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      isNewAlert: this.newAlertOn,
      statueTypes: {
        pending: { text: "Pending Approval", class: "pending" },
        approved: { text: "Approved", class: "approved" },
        rejected: { text: "Rejected", class: "rejected" },
        draft: { text: "Draft", class: "draft" },
      },

      isCardDetailOpen: false,
      cardActionsOpened: false,
    };
  },
  methods: {
    hideNewAlert() {
      this.isNewAlert = false;
    },
    handleDetailOpen() {
      this.isCardDetailOpen = true;
    },
    handleDetailClose() {
      this.isCardDetailOpen = false;
    },
    handleCardActionsOpen() {
      this.cardActionsOpened = true;
    },
    handleCardActionsClose() {
      this.cardActionsOpened = false;
    },
  },
};
</script>
<style lang="postcss">
.expense-card-statue {
  @apply rounded-md;
  padding: 4px 8px;
  width: auto;
}

.expense-card:before {
  content: "";
  @apply block absolute top-0 bottom-0 left-0 h-full w-8x rounded-tl-ss rounded-bl-ss;
}

.expense-card.nofication:before {
  @apply bg-green-300;
}

.expense-card.nofication:after {
  content: "";
  transform: translate3d(0, -30%, 0) rotate(45deg);
  @apply block absolute top-0 right-16x w-16x h-16x bg-green-50;
}

.expense-card-statue.pending,
.expense-card.pending:before {
  @apply bg-yellow-300;
}

.expense-card-statue.approved {
  @apply bg-green-100 text-green-300;
}

.expense-card.approved:before {
  @apply bg-green-300;
}

.expense-card-statue.rejected,
.expense-card.rejected:before {
  @apply bg-red-100 text-red-500;
}

.expense-card-statue.draft,
.expense-card.draft:before {
  @apply bg-gray-30;
}
</style>
