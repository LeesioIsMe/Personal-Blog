<template>
  <div class="home">
    <home-header :activeNav="1"></home-header>
    <home-slider></home-slider>
    <home-seen></home-seen>
    <home-content></home-content>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "../components/home/Home-Header";
import HomeSlider from "../components/home/Home-Slider";
import HomeSeen from "../components/home/Home-Seen";
import HomeContent from "../components/home/Home-Content";
import PageLoading from "../components/common/Page-Loading";
export default {
  name: "home",
  components: {
    "home-header": HomeHeader,
    "home-slider": HomeSlider,
    "home-seen": HomeSeen,
    "home-content": HomeContent,
    "page-loading": PageLoading
  }
};
</script>
<style>
  .home{
    background:#eaeaea;
  }
</style>

