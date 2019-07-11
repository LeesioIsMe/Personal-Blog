<template>
  <div class="college-info">
    <div class="banner">
      <el-tabs tab-position="left">
        <el-tab-pane label="毕业证书">
          <el-carousel :interval="5000" arrow="always" :height="height">
            <el-carousel-item v-for="item in 3" :key="item" :height="height">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="学校概况">
          <el-carousel :interval="5000" arrow="always" :height="height">
            <el-carousel-item v-for="item in 3" :key="item" :height="height">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="学院概况">
          <el-carousel :interval="5000" arrow="always" :height="height">
            <el-carousel-item v-for="item in 3" :key="item" :height="height">
              <h3>{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
        <el-tab-pane label="校长信息">
          <el-carousel :interval="5000" arrow="always" :height="height">
            <el-carousel-item :height="height">
              <h3>我们的校长叫杨小林</h3>
            </el-carousel-item>
            <el-carousel-item>
              <h3>大学四年见了两面</h3>
            </el-carousel-item>
            <el-carousel-item>
              <h3>校长介绍完毕</h3>
            </el-carousel-item>
          </el-carousel>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "college-info",
  data() {
    return {
      height: "300px"
    };
  },
  computed: {
    ...mapState(["isPhone"])
  },
  mounted() {
    console.log(this.isPhone);
    if (this.isPhone) {
      this.height = "200px";
    }
  }
};
</script>
<style scoped>
.college-info {
  /* background: rgba(0, 0, 0, 0.1); */
}
.banner {
  width: 100vw;
  margin: 0 auto;
  height: 300px;
}
.banner img {
  width: 100%;
}
.el-carousel__item h3 {
  color: #333;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  font-size: 12px;
}
.el-carousel__item img {
  width: 100%;
  vertical-align: middle;
}
.el-carousel__indicators {
  display: none;
}
@media screen and (max-width: 750px) {
  .banner {
    height: 200px;
  }
  .el-carousel__item h3 {
    line-height: 200px;
  }
}
</style>

