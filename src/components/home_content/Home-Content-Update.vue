<template>
  <div class="home-content-next">
    <h4>距离下次更新网站......</h4>
    <div class="progress-bg">
      <div class="progress">
        <div
          class="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style="width: 100%"
        >等吧...</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-content-next",
  data() {
    return {};
  }
};
</script>
<style scoped>
.home-content-next {
  width: 100%;
  background: #fff;
  margin-top: 10px;
  border-radius: 3px;
}
h4 {
  font-size: 0.8em;
  padding: 10px;
  border-bottom:1px solid #eaeaea;
}
.progress-bg {
  padding: 10px;
}
.progress {
  width: 100%;
}
.progress-bar {
  color: #fff;
}
</style>
