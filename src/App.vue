<template>
  <div id="app">
    <page-loading></page-loading>
    <mt-popup :visible.sync="popupVisible" position="bottom">
      <div class="top"></div>
    </mt-popup>
    <router-view />
  </div>
</template>
<script>
import PageLoading from "./components/common/Page-Loading";
export default {
  data() {
    return {
      popupVisible: true
    };
  },
  components: {
    "page-loading": PageLoading
  },
  methods: {
    showPopupVisible() {
      console.log("Aaa");
      this.popupVisible = true;
    }
  },
  mounted() {
    window.oncontextmenu = new Function("return false");
    console.log("%c" + "以下均为广告信息" + "", "color:black;font-size:32px");
    console.log(
      "%c" + "-------------------------" + "",
      "color:#ccc;font-size:16px"
    );
    console.log("%c" + "微信a18790641608" + "", "color:red;font-size:16px");
    console.log(
      "%c" + "node+express+mysql+各种模块项目" + "",
      "color:blue;font-size:16px"
    );
    console.log(
      "%c" + "vue~elementui～mintui等项目" + "",
      "color:purple;font-size:16px"
    );
    console.log("%c" + "课设等项目" + "", "color:green;font-size:16px");
    console.log("%c" + "毕设等" + "", "color:orange;font-size:16px");

    console.log(
      "%c" + "-------------------------" + "",
      "color:#ccc;font-size:16px"
    );
    console.log("%c" + "请继续看你们代码" + "", "color:black;font-size:32px");
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  // background: #eaeaea;
  min-width:100vw;
  overflow-x: hidden;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

ul,
ol {
  list-style: none;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>
