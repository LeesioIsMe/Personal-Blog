<template>
  <div class="album-3d-rolling">
    <!-- <vue-particles></vue-particles> -->
    <div style="display:none">
      <img id="flower" src="../../assets/album/flower.jpg" alt />
    </div>
    <album-3d-muma></album-3d-muma>
  </div>
</template>

<script>
import Album3DMuma from "../album-3d/Album-3D-Muma";
import "vue2-animate/dist/vue2-animate.min.css";
// import VueParticles from "../../components/common/Vue-Particles";
export default {
  name: "album-3d-rolling",
  components: {
    "album-3d-muma": Album3DMuma
  },
  data() {
    return {
      // linesDistance: 100
    };
  },
  mounted() {
    document.querySelector(".album").addEventListener("click", function(e) {
      if (!(e.pageY <= 50)) {
        draw(e);
      }
    });
    var X = 0;
    var Y = 0;
    function draw(e) {
      var canvas = document.createElement("canvas");
      var currentX = e.pageX;
      var currentY = e.pageY;
      canvas.id = "heart";
      document.body.appendChild(canvas);
      canvas.setAttribute("style", `left:${currentX}px;top:${currentY}px`);
      var pic = document.getElementById("flower"); //获取描边图片

      canvas.classList.add("animated");
      //   canvas.classList.add("bounceIn");

      canvas.width = "40";
      canvas.height = "40";

      if (canvas.getContext) {
        var content = canvas.getContext("2d");
        var radian = 0;
        var radian_add = Math.PI / 40;
        content.translate(10, 10);
        function heart() {
          X = getX1(radian);
          Y = getY1(radian);
          content.drawImage(pic, X, Y, 3, 3); //在给定坐标绘制给定大小的图片
          content.closePath();
          content.restore();
          content.globalAlpha = Math.random();
          radian += radian_add;
          if (radian > 2 * Math.PI) {
            //绘制完整的心型线后取消间歇调用
            clearInterval(intervalId);
            canvas.classList.add("fadeOutUp");
            setTimeout(function() {
              document.body.removeChild(canvas);
            }, 1000);
          }
        }
        var intervalId = setInterval(heart, 5); //设置间歇调用，间隔为100ms
      }
    }

    function getX(t) {
      //获取玫瑰线的X坐标
      return 2 * Math.sin(4 * t) * Math.cos(t);
    }

    function getY(t) {
      //获取玫瑰线的Y坐标
      return 2 * Math.sin(4 * t) * Math.sin(t);
    }

    function getX1(t) {
      //获取心型线的X坐标
      return (1 / 2) * (16 * Math.pow(Math.sin(t), 3));
    }

    function getY1(t) {
      //获取心型线的Y坐标
      return (
        (-1 / 2) *
        (13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t))
      );
    }
  }
};
</script>

<style>
.album-3d-rolling {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
#heart {
  background: transparent;
}
.animated {
  position: absolute;
  z-index: 200;
}
</style>
