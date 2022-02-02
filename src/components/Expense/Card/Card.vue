<template>
  <div>
    <div
      :class="`expense-card bg-gray-10 rounded-ss mb-16x p-24x relative
 ${statueTypes[statue].class}`"
    >
      <h4 class="text-lm">{{ title }}</h4>
      <span class="text-gray-50">{{ subTitle }}</span>
      <p class="my-16x">
        Created on: <span class="text-gray-50">{{ date }}</span>
      </p>
      <div class="flex justify-between items-centers">
        <div :class="`expense-card-statue ${statueTypes[statue].class}`">
          <span class="text-sm">{{ statueTypes[statue].text }}</span>
        </div>
        <p class="mb-0 text-lx">{{ price }}</p>
      </div>
    </div>
    <div
      class="expense-card nofication bg-green-50 rounded-ss mb-16x p-24x relative"
    >
      <h4 class="text-lm">Start to add your expenses</h4>
      <p class="text-sm mt-8x mb-8x">
        You just created an expense form group. Now, you can add your bills and
        other expenses which are related to this WBS group.
      </p>
      <v-btn color="p-0" text>dismiss</v-btn>
    </div>
  </div>
</template>
<script>
export default {
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
  },
  data: () => ({
    statueTypes: {
      pending: {
        text: "Pending Approval",
        class: "pending",
      },
      approved: {
        text: "Approved",
        class: "approved",
      },
      rejected: {
        text: "Rejected",
        class: "rejected",
      },
      draft: {
        text: "Draft",
        class: "draft",
      },
    },
  }),
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

.expense-card-statue.pending,
.expense-card.pending:before {
  @apply bg-yellow-300;
}

.expense-card-statue.approved,
.expense-card.approved:before {
  @apply bg-green-100 text-green-300;
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
