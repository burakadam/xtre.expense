<template>
  <div class="xtre-file-input flex flex-wrap my-16x">
    <div
      class="w-72x h-72x bg-gray-100 border border-gray-500 border-dashed rounded-sx flex justify-center items-center relative mr-10x"
    >
      <i class="ci-image text-lxx"></i>

      <input
        type="file"
        multiple
        accept="image"
        class="opacity-0 absolute w-full h-full"
        @change="onFileChange"
      />
    </div>
    <div
      v-for="(item, index) in shownImages"
      :key="index"
      class="relative mr-10x mb-10x"
    >
      <button
        type="button"
        color="danger"
        icon
        class="bg-red-500 rounded-full absolute w-16x h-16x -right-1 -top-1 file-delete-btn"
        @click="removeImage(index)"
      >
        <i class="ci-minus text-white"></i>
      </button>
      <img
        class="w-72x h-72x bg-gray-100 border border-gray-500 border-dashed rounded-sx grow-0"
        :src="item"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "FileLoader",
  data: () => ({
    images: [],
    shownImages: [],
  }),
  methods: {
    onFileChange(e) {
      var selectedFiles = e.target.files;
      this.shownImages = [];

      for (let i = 0; i < selectedFiles.length; i++) {
        this.images.push(selectedFiles[i]);
      }
      for (let i = 0; i < this.images.length; i++) {
        let reader = new FileReader();
        reader.onload = () => {
          this.shownImages.push(reader.result);
        };
        reader.readAsDataURL(this.images[i]);
      }
    },
    removeImage(e) {
      this.shownImages = this.shownImages.filter((el, index) => index !== e);
    },
  },
};
</script>
<style scoped>
.file-delete-btn {
  height: 16px !important;
  padding: 0 !important;
}
</style>
