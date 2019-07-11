<template>
  <div class="home-content">
    <div class="left">
      <nav>
        <ul>
          <li>
            电源状态：
            <i class="fa fa-battery-empty" :style="{color:red}" aria-hidden="true"></i> 已关机&nbsp;
            <i class="fa fa-battery-quarter" :style="{color:orange}" aria-hidden="true"></i>
            <span class="tips">阅读中&nbsp;</span>
            <i class="fa fa-battery-half" :style="{color:green}" aria-hidden="true"></i>
            <span class="tips">评论中&nbsp;</span>
            <i class="fa fa-battery-three-quarters" :style="{color:green}" aria-hidden="true"></i>
            <span class="tips">评论后&nbsp;</span>
            <i class="fa fa-battery-full" :style="{color:black}" aria-hidden="true"></i>
            <span class="tips">点过赞</span>
          </li>
        </ul>
      </nav>
      <home-content-dynamic></home-content-dynamic>
    </div>
    <div class="right">
      <home-content-user></home-content-user>
      <home-content-update></home-content-update>
      <home-content-give></home-content-give>
      <home-content-adver></home-content-adver>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

import HomeContentDynamic from "../home_content/Home-Content-Dynamic";
import HomeContentUser from "../home_content/Home-Content-User";
import HomeContentUpdate from "../home_content/Home-Content-Update";
import HomeContentGive from "../home_content/Home-Content-Give";
import HomeContentAdver from "../home_content/Home-Content-Adver";

export default {
  name: "home-content",
  components: {
    "home-content-dynamic": HomeContentDynamic,
    "home-content-user": HomeContentUser,
    "home-content-update": HomeContentUpdate,
    "home-content-update": HomeContentUpdate,
    "home-content-give": HomeContentGive,
    "home-content-adver": HomeContentAdver
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapState({
      red: state => state.red,
      orange: state => state.orange,
      green: state => state.green,
      black: state => state.black
    })
  }
};
</script>

<style scoped>
.home-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.left {
  width: 60%;
  /* margin-right: 10px; */
}
.right {
  width: 20%;
}
nav {
  height: 3em;
  line-height: 3em;
  font-size: 1em;
  background: #fff;
  box-shadow: #ccc 5px 5px 5px;
  color: #333;
  font-family: "Times New Roman", Times, serif;
  border-radius: 3px;
}
.fa {
  display: inline-block;
  line-height: 2em;
  height: 2em;
}
@media screen and (max-width: 750px) {
  nav {
    height: 2em;
    line-height: 2em;
    font-size: 0.8em;
  }
  .left {
    width: 100%;
  }
  .right {
    width: 100%;
  }
}
@media screen and (min-width: 750px) {
  .left {
    margin-right: 10px;
  }
}
</style>
