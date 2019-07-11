<template>
  <div class="album-3d-muma">
    <h4 class="title">3D轮播相册</h4>
    <div class="slider-3d" ref="slider3d">
      <a class="slider-item">
        <img src="../../assets/album/slider.jpg" alt />
      </a>
      <a class="slider-item">
        <img src="../../assets/album/slider1.jpg" alt />
      </a>
      <a class="slider-item">
        <img src="../../assets/album/slider2.jpg" alt />
      </a>
      <a class="slider-item">
        <img src="../../assets/album/slider3.jpg" alt />
      </a>
      <a class="slider-item">
        <img src="../../assets/album/slider4.jpg" alt />
      </a>
      <a class="slider-item">
        <img src="../../assets/album/slider5.jpg" alt />
      </a>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "album-3d-muma",
  data() {
    return {};
  },
  computed: {
    ...mapState(["isPhone","transform"])
  },
  mounted() {
    var i = 1;
    var _this = this;
    var sliderItems = document.querySelectorAll(".slider-item");
    sliderItems[0].style.opacity = 1;
    var slider3dTimer = setInterval(function() {
      _this.$refs.slider3d.style.transform = `${_this.transform} rotateY(-${60 *
        i}deg)`;
      sliderItems.forEach((v, j) => {
        i % 6 == 6 - j ? (v.style.opacity = "1") : (v.style.opacity = "0.5");
        // console.log(j + "--" + v.style.opacity);
        if (i % 6 == 0 && j == 0) {
          v.style.opacity = 1;
        }
      });
      i++;
    }, 3000);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.album-3d-muma{
  /* display:flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* flex-wrap: wrap; */
}
.slider-3d {
  transform: perspective(1000px);
  transform-style: preserve-3d;
  transform-origin: center top;
  position: relative;
  width: 400px;
  margin: 0 auto 0;
  height: 400px;
  transition: 1s linear;
  /* transform:perspective(1000px) rotateY(180deg); */
  /* animation: rotate 6s linear both 0s infinite; */
  z-index: 100;
}
.slider-3d .slider-item {
  position: absolute;
  width: 400px;
  height: 200px;
  left: calc(50% - 200px);
  top: calc(50% - 100px);
  background: rgba(0, 0, 0, 0.5);
  opacity: 0.5;
  transition: 1s;
}
.slider-3d .slider-item img {
  width: 100%;
  height: 100%;
  box-shadow: #000 0 0 5px;
}
.slider-3d .slider-item:nth-of-type(1) {
  background: rgba(100, 0, 0, 0.5);
  transform: translateZ(346px);
}
.slider-3d .slider-item:nth-of-type(2) {
  background: rgba(100, 100, 0, 0.5);
  transform-origin: right center;
  transform: translateZ(346px) translateX(-400px) rotateY(-60deg);
}
.slider-3d .slider-item:nth-of-type(3) {
  background: rgba(100, 100, 100, 0.5);
  transform-origin: left center;
  transform: translateX(-200px) translateZ(0px) rotateY(60deg);
}
.slider-3d .slider-item:nth-of-type(4) {
  background: rgba(100, 0, 100, 0.5);
  transform: translateZ(-346px);
}
.slider-3d .slider-item:nth-of-type(5) {
  background: rgba(0, 0, 200, 0.5);
  transform-origin: right center;
  transform: translateX(200px) translateZ(0) rotateY(-60deg);
}
.slider-3d .slider-item:nth-of-type(6) {
  background: rgba(100, 200, 100, 0.5);
  transform-origin: left center;
  transform: translateZ(346px) translateX(400px) rotateY(60deg);
}
/* @keyframes rotate {
  0% {
    transform: perspective(1000px) rotateY(0);
  }
  25% {
    transform: perspective(1000px) rotateY(-60deg);
  }
  50%{
    transform: perspective(1000px) rotateY(-60deg);
  }
  75%{
    transform: perspective(1000px) rotateY(-60deg);
  }
  75%{
    transform: perspective(1000px) rotateY(-60deg);
  }
} */
/* @media screen and (max-width:750px){
    .slider-3d{
      margin-top:100px;
    }
} */
</style>
