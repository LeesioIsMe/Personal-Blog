<template>
  <div class="album">
    <vue-particles></vue-particles>
    <home-header :background="background" :activeNav="2"></home-header>
    <album-slider :sliderHeight="sliderHeight"></album-slider>
    <album-3d-rolling></album-3d-rolling>
    <album-lighting-box></album-lighting-box>
  </div>
</template>

<script>
// @ is an alias to /src
import "vue2-animate/dist/vue2-animate.css";
import HomeHeader from "../components/home/Home-Header";
import AlbumSlider from "../components/album/Album-Slider";
import AlbumLightingBox from "../components/album/Album-Lightingbox";
import VueParticles from "../components/common/Vue-Particles";
import Album3DRolling from "../components/album/Album-3DRolling";

import { mapState, mapMutations } from "vuex";
export default {
  name: "album",
  components: {
    "home-header": HomeHeader,
    "album-slider": AlbumSlider,
    "album-lighting-box": AlbumLightingBox,
    "vue-particles": VueParticles,
    "album-3d-rolling": Album3DRolling
  },
  data() {
    return {
      background: "#fff !important",
      sliderHeight: "calc(100vh - 210px)",
      linesDistance: 100
    };
  },
  methods: {
    ...mapMutations(["changePhoneStatus"]),
    initDevice() {
      var clientWidth = document.body.clientWidth;
      console.log(clientWidth);
      if (clientWidth < 750) {
        this.sliderHeight = "150px";
        this.changePhoneStatus(1);
      } else {
        this.sliderHeight = "calc(100vh - 210px)";
        this.changePhoneStatus(0);
      }
    }
  },
  mounted() {
    window.oncontextmenu = new Function("return false");
    this.initDevice();
    window.onresize = () => {
      this.initDevice();
    };
    document.querySelectorAll(".title").forEach((v, i) => {
      v.setAttribute("title", "点我跳以跳");
      v.addEventListener("click", function() {
        console.log(v);
        v.classList.add("bounceIn");
        setTimeout(function() {
          v.classList.remove("bounceIn");
        }, 1000);
      });
    });
  }
};
</script>
<style scoped>
.title {
  cursor: pointer;
  z-index: 300;
}
</style>

