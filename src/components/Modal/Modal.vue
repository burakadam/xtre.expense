<template>
  <Teleport to="#app">
    <div class="fixed w-screen h-screen z-50 top-0 left-0 flex items-end">
      <div
        class="modal-bg bg-gray-0 top-0 left-0 w-full h-full absolute z--1 animate:fadeIn"
        @click="close"
      />
      <div
        class="modal-container bg-white w-full max-h-90p rounded-tl-smb rounded-tr-smb pt-64x relative flex flex-col"
      >
        <span
          class="h-4x w-24x bg-gray-30 block rounded-smb left-0 right-0 mx-auto mb-16x absolute top-8x"
        />
        <div
          class="absolute h-64x top-0 left-0 w-full py-19x px-20x flex items-center justify-center"
        >
          <button
            type="button"
            @click="close"
            class="absolute left-12x top-0 bottom-0 m-auto p-0"
          >
            <i class="ci-close_big text-lxx"></i>
          </button>
          <p class="mb-0 text-lm">{{ title }}</p>
          <div
            class="absolute right-20x top-0 bottom-0 m-auto p-0 flex items-center justify-end"
          >
            <slot name="header"></slot>
          </div>
        </div>
        <div class="flex-1 overflow-scroll pb-29x px-20x pt-4x">
          <div>
            <slot name="body"></slot>
          </div>
        </div>
        <slot name="footer"> </slot>
      </div>
    </div>
  </Teleport>
</template>
<script>
import Teleport from "vue2-teleport";

export default {
  name: "Modal",
  components: { Teleport },

  props: {
    title: {
      type: String,
      default: "Choose a WBS",
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  created: function () {
    const component = this.$mount();
    document.getElementById("app").appendChild(component.$el);
  },
};
</script>
<style scoped lang="postcss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translate3d(0, 100%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.modal-bg {
  animation: fadeIn 250ms ease-in-out forwards;
}
.modal-container {
  animation: slideUp 250ms ease-in-out forwards;
}
</style>
