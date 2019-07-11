<template>
  <div class="home-header">
    <header :style="{background:background}">
      <div class="logo">
        <img src="../../assets/lxh-name.png" alt />
      </div>
      <div class="nav">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1" :class="{active:isHome}">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2" :class="{active:isAlbum}">
            <router-link to="/album">相册</router-link>
          </el-menu-item>
          <el-menu-item index="3" :class="{active:isCollege}">
            <router-link to="/college">院校</router-link>
          </el-menu-item>
          <el-menu-item index="4" :class="{active:isTechnic}">
            <router-link to="/technic">技术</router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="user">
        <div class="sideBar">
          <img src="../../assets/logo.png" alt="李先豪" />
        </div>
        <div class="userlogo">
          <img src="../../assets/logo.png" alt="李先豪" />
        </div>
        <div class="userinfo">李先豪</div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: ["background", "activeNav"],
  name: "home-header",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isHome: false,
      isAlbum: false,
      isCollege: false,
      isTechnic: false
    };
  },
  mounted() {
    if (this.activeNav == 1) {
      this.isHome = true;
    } else if (this.activeNav == 2) {
      this.isAlbum = true;
    } else if (this.activeNav == 3) {
      this.isCollege = true;
    } else if (this.activeNav == 4) {
      this.isTechnic = true;
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  background: #000;
  color: #fff;
  border-top: 2px solid green;
  border-bottom: 1px solid #333;
  box-shadow: #ccc 0 1px 0px;
}
.logo {
  height: 50px;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav {
  width: 50%;
  max-height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
}
.user {
  width: 20%;
}
.logo img {
  /* width: 100%; */
  height: 50px;
  vertical-align: middle;
}
.el-menu-demo {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
}
.el-menu-demo li {
  font-size: 1em;
  margin-right: 1em;
  cursor: pointer;
}
.el-menu-demo li:hover {
  color: rgb(255, 65, 65);
}
.el-menu-demo li a {
  color: #666;
  text-decoration: none;
}
.el-menu-demo li:hover a {
  color: rgb(255, 65, 65);
}
.active a {
  color: rgb(255, 65, 65) !important;
}
.el-menu-demo li:nth-last-of-type(1) {
  margin-right: 0;
}

.user {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.user .userlogo {
  padding-right: 2em;
  position: relative;
}
.user .userlogo:after {
  position: absolute;
  top: calc(50% - 0.5em);
  right: 0.5em;
  content: "is";
  color: #fff;
  background: rgba(255, 255, 255, 0.3);
  width: 1em;
  height: 1em;
  line-height: 1em;
  font-size: 0.8em;
  border-radius: 50%;
  display: inline-block;
}
.user img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
.userinfo {
  text-shadow: green 1px 1px 2px;
}
@media screen and (min-width: 750px) {
  .sideBar {
    display: none;
  }
}
@media screen and (max-width: 750px) {
  header {
    font-size: 0.8em;
  }
  .sideBar {
    display: block;
  }
  .userinfo,
  .userlogo {
    display: none;
  }
  .logo img {
    /* margin-left: 1em; */
    height: 30px;
  }
}
@media screen and (max-width: 320px) {
  .nav {
    font-size: 0.8em;
  }
}
</style>
