<template>
  <div class="vue-particles">
    <vue-particles
      color="#000"
      :particleOpacity="0.7"
      :particlesNumber="200"
      shapeType="triangle"
      :particleSize="4"
      linesColor="#000"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="linesDistance"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="album-lizi"
    ></vue-particles>
  </div>
</template>
<script>
export default {
    name:"vueparticles",
    data(){
        return{
            linesDistance:100
        }
    }
}
</script>

<style scoped>
.album-lizi {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: -1;
}
</style>

