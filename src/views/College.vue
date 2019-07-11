<template>
  <div class="college">
    <background-gif></background-gif>
    <home-header :activeNav="3" :background="background"></home-header>
    <college-info></college-info>
    <college-timeline></college-timeline>
  </div>
</template>
<script>
import BackgroundGif from "../components/common/Background-Gif";
import HomeHeader from "../components/home/Home-Header";
import CollegeInfo from "../components/college/College-Info";
import CollegeTimeline from "../components/college/College-Timeline";
export default {
  name: "college",
  data() {
    return {
      background: "rgba(255,255,255,1) !important"
    };
  },
  components: {
    "background-gif": BackgroundGif,
    "home-header": HomeHeader,
    "college-info": CollegeInfo,
    "college-timeline": CollegeTimeline
  }
};
</script>
<style scoped>
</style>

