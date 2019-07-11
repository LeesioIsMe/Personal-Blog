<template>
  <div class="pageLoading" v-if="$store.state.pageLoading">
    <div class="fullScreen">
      <i class="fa fa-spinner" aria-hidden="true" style="font-size:2em"></i>
      <div>Loading...</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "pageLoading",
  data() {
    return {};
  }
};
</script>

<style scoped>
.pageLoading {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  color:turquoise;
}
.pageLoading .fa {
  animation: pageLoading 3s linear both infinite;
}
@keyframes pageLoading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

