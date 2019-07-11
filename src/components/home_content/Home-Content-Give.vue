<template>
  <div class="home-content-give">
    <h4 class="give">赞助本站</h4>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="微信" name="weixin">
        <img v-if="isShow" src="../../assets/shoukuan/weixin-shoukuan.jpeg" alt />
        <img v-else src="../../assets/shoukuan/weixin.png" alt />
      </el-tab-pane>
      <el-tab-pane label="支付宝" name="zhifubao">
        <img v-if="isShow" src="../../assets/shoukuan/zhifubao-shoukuan.jpeg" alt />
        <img v-else src="../../assets/shoukuan/zhifubao.png" alt />
      </el-tab-pane>
      <el-tab-pane label="QQ" name="qq">
        <img v-if="isShow" src="../../assets/shoukuan/qq-shoukuan.jpeg" alt />
        <img v-else src="../../assets/shoukuan/qq.png" alt />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  name: "home-content-give",
  data() {
    return {
      activeName: "weixin",
      isShow: true
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
    var clientWidth = document.querySelector("body").clientWidth;
    console.log(clientWidth)
    if (clientWidth < 750) {
      this.isShow = false;
    }
    window.onreset = function() {
      var clientWidth = document.querySelector("html").clientWidth;
      if (clientWidth < 750) {
        this.isShow = false;
      }
    };
    window.onresize = function() {
      var clientWidth = document.querySelector("html").clientWidth;
      if (clientWidth < 750) {
        this.isShow = false;
      }
    };
  }
};
</script>
<style scoped>
.home-content-give {
  background: #fff;
  border-radius: 3px;
  padding: 10px;
  margin-top: 10px;
}
h4 {
  font-size: 1em;
  border-bottom: 1px solid #eaeaea;
}
.el-tab-pane {
  /* padding: 0 3em; */
  display:flex;
  justify-content: center;
  align-items: center;
}
.el-tab-pane img {
  width: 100%;
}
@media screen and (max-width:750px){
    .el-tab-pane img{
        width:140px;
        height:140px;
    }
}
</style>


