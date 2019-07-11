<template>
  <div class="home-seen">
    <div class="seens-list">
      <div class="seens-item">
        <img src="../../assets/seens/seen1.jpg" alt />
        <div class="seens-border">
          <div class="seens-border-inner">
            <div class="seens-border-inner-border"></div>
          </div>
        </div>
      </div>
      <div class="seens-item">
        <img src="../../assets/seens/seen2.jpg" alt />
        <div class="seens-border">
          <div class="seens-border-inner">
            <div class="seens-border-inner-border"></div>
          </div>
        </div>
      </div>
      <div class="seens-item">
        <img src="../../assets/seens/seen3.jpg" alt />
        <div class="seens-border">
          <div class="seens-border-inner">
            <div class="seens-border-inner-border"></div>
          </div>
        </div>
      </div>
      <div class="seens-item">
        <img src="../../assets/seens/seen4.jpg" alt />
        <div class="seens-border">
          <div class="seens-border-inner">
            <div class="seens-border-inner-border"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-seen",
  data() {
    return {};
  }
};
</script>

<style scoped>
.seens-list {
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.seens-list .seens-item {
  border: 2px solid #fff;
  box-shadow: #000 0px 0px 5px;
  margin: 1px solid #fff;
  width: 20%;
  position: relative;
}
.seens-list .seens-item img {
  width: 100%;
  opacity: 0.8;
  transition: 0.3s linear;
}
.seens-border {
  transition: 0.3s linear;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.seens-border-inner {
  border: 1px solid #fff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s linear;
}
.seens-item:hover .seens-border {
  background: rgba(0, 0, 0, 0.2);
}
.seens-item:hover .seens-border-inner {
  background: rgba(0, 0, 0, 0);
  padding: 10%;
  /* left:calc(50% - 65px);
  top:calc(50% - 45px); */
}
.seens-item:hover img {
  opacity: 1;
}
.seens-border-inner-border {
  width: 100%;
  height: 100%;
}
.seens-item:hover .seens-border-inner .seens-border-inner-border {
  /* width:100%; */
  border: 1px solid #fff;
}
@media screen and (max-width: 750px) {
  .seens-list .seens-item {
    border: 2px solid #fff;
    width: 50vw;
  }
}
</style>
