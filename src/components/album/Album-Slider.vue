<template>
  <div class="album-slider">
    <h4 class="title">3D层叠相册</h4>
    <div>
      <el-carousel :interval="0" type="card" :height="sliderHeight">
        <el-carousel-item>
          <img src="../../assets/slider/wow-bg.jpg" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/slider/wow-bg2.jpg" alt />
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../assets/slider/wow-bg3.jpg" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "album-slider",
  props: ["sliderHeight"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.title {
  padding-top: 100px;
  /* position: relative;
  top:50px; */
  z-index: 300;
}
.album-slider {
  /* margin-top:100px; */
  height: calc(100vh);
  background-color: transparent;
  box-shadow: rgb(100, 100, 200) 0 0 5px;
}
.album-slider * {
  background: transparent !important;
}
.el-carousel,
.el-carousel__container {
  /* height: calc(100% -) !important; */
}
.el-carousel__container {
  display: flex;
  align-items: center;
}
.el-carousel__item {
  height: fit-content;
  top: calc(50% - 15vw);
}
.el-carousel__item img {
  width: 100%;
  max-height: 100%;
  vertical-align: middle;
}
/* @media screen and (max-width: 750px) {
  .album-slider {
    height: 100vh;
  }
} */
</style>


