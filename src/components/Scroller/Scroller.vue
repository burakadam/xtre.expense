<template>
  <div class="xtre-scroller">
    <div>
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: "Scroller",
};
</script>
<style>
.xtre-scroller {
  width: 100%;
  height: 40px;
  overflow: hidden;
  margin-bottom: 16px;
}

.xtre-scroller > div {
  height: 80px; /* 40px - more place for scrollbar, is hidden under parent box */
  padding: 5px;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  display: flex;
}
</style>
