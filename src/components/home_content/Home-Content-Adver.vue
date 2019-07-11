<template>
  <div class="home-content-adver">
    <mt-swipe
      :auto="2000"
      :show-indicators="false"
      title="点击查看详情"
      @click.native="$emit('showPopupVisible')"
    >
      <!-- <mt-swipe-item>{{dateNow}}</mt-swipe-item> -->
      <mt-swipe-item>
        <mt-spinner color="red" type="double-bounce"></mt-spinner>
        <mt-spinner color="red" type="double-bounce"></mt-spinner>
        <label>
          <img src="../../assets/weixin-logo.jpg" alt />
        </label>
        <mt-spinner color="red" type="double-bounce"></mt-spinner>
        <mt-spinner color="red" type="double-bounce"></mt-spinner>
      </mt-swipe-item>
      <mt-swipe-item>
        <mt-spinner color="green" type="double-bounce"></mt-spinner>
        <mt-spinner color="green" type="double-bounce"></mt-spinner>
        <label>
          <img src="../../assets/daizuo.png" alt />
        </label>
        <mt-spinner color="green" type="double-bounce"></mt-spinner>
        <mt-spinner color="green" type="double-bounce"></mt-spinner>
      </mt-swipe-item>
      <mt-swipe-item>
        <mt-spinner color="blue" type="double-bounce"></mt-spinner>
        <mt-spinner color="blue" type="double-bounce"></mt-spinner>
        <label>
          <img src="../../assets/qietu.png" alt />
        </label>
        <mt-spinner color="blue" type="double-bounce"></mt-spinner>
        <mt-spinner color="blue" type="double-bounce"></mt-spinner>
      </mt-swipe-item>
      <!-- <mt-swipe-item>3</mt-swipe-item>  -->
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: "home-content-adver",
  data() {
    return {
      dateNow: new Date().toUTCString()
    };
  },
  methods: {
    showModel() {
      console.log(this.$emit);
      this.$emit("showPopupVisible");
    }
  }
};
</script>
<style>
.home-content-adver {
  height: 180px;
  max-height: 180px;
}
.home-content-adver  .mint-swipe {
  padding: 10px;
  background: #fff;
  margin-top: 10px;
  cursor: pointer;
}
.mint-swipe-item {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-between !important;
  align-content: space-between !important;
  position: relative;
  height: 100%;
  width: 100%;
  /* background:rgba(0,0,0,0.5); */
}
.mint-swipe-item span {
  width: 50%;
  display: block;
  text-align: left;
  height: 2em;
}
.mint-swipe-item span:nth-of-type(2n) {
  text-align: right;
}
.mint-spinner-double-bounce {
  display: inline-block;
  z-index: 100;
}
.mint-swipe label {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-height: 150px;
  position: absolute;
  top: 10px;
  left: 0;
  z-index: 0;
  /* background:rgba(0,0,0,0.5); */
}
.mint-swipe label img {
  width: 140px;
  height: 140px;
  cursor: pointer;
}
</style>