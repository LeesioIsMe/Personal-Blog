<template>
  <div class="lighting-box">
    <h4 class="title">LightingBox相册</h4>
    <div class="box-bg">
      <div class="box-container gallery">
        <a href="/img/lightingbox/wow-bg.jpg" class="box-item">
          <img src="../../assets/slider/wow-bg.jpg" alt />
        </a>
        <a href="/img/lightingbox/wow-bg2.jpg" class="box-item">
          <img src="../../assets/slider/wow-bg2.jpg" alt />
        </a>
        <a href="/img/lightingbox/wow-bg3.jpg" class="box-item">
          <img src="../../assets/slider/wow-bg3.jpg" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lightingbox",
  data() {
    return {};
  },
  mounted() {
    baguetteBox.run(".box-container");
  }
};
</script>

<style scoped>
.lighting-box {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-shadow: rgb(100, 200, 255) 0 0 5px;
}
.box-container {
  /* border:1px solid #ccc; */
  box-shadow: #000 0 0 5px;
  display: flex;
  justify-content: flex-start;
}
.box-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.333333vw;
  padding: 5px;
  border: 1px solid #ccc;
}
.gallery img {
  width: 100%;
}
</style>
