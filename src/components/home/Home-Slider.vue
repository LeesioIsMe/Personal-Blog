<template>
  <div class="home-slider">
    <div id="carouselId" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselId" data-slide-to="0" class="active"></li>
        <li data-target="#carouselId" data-slide-to="1"></li>
        <li data-target="#carouselId" data-slide-to="2"></li>
        <li data-target="#carouselId" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img src="../../assets/slider/desktop.jpeg" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img src="../../assets/slider/wow-bg.jpg" alt="First slide" />
        </div>
        <div class="carousel-item">
          <img src="../../assets/slider/wow-bg2.jpg" alt="Second slide" />
        </div>
        <div class="carousel-item">
          <img src="../../assets/slider/wow-bg3.jpg" alt="Third slide" />
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "home-slider",
  data() {
    return {};
  },
  mounted() {
    $(".carousel").carousel({
      interval: 3000
    });
  }
};
</script>
<style scoped>
.carousel img {
  width: 100%;
  height: calc(100vw * 12 / 19);
}
.carousel-control-prev-icon,.carousel-control-next-icon{
    border:4px solid transparent;
    border-radius:50%;
    transition: 0.6s;
    padding:10px;
}
.carousel-control-prev-icon:hover,.carousel-control-next-icon:hover{
    border:4px solid #fff;
}
@media screen and (min-width:750px){
    .carousel img{
        height:calc(100vh - 50px);
    }
}
</style>