<template>
  <div class="home-content-dynamic">
    <div class="dleft">
      <div class="logo">
        <img src="../../assets/logo.png" alt />
      </div>
    </div>
    <div class="dright">
      <article>
        <div class="name">李先豪</div>
        <h3>展示我的风采</h3>
        <main>
          <section class="content">
            <p class="content-info">
              <span class="time">
                <i class="fa fa-clock-o" aria-hidden="true"></i> 2019-07-06 18:44
              </span>
            </p>
            <div class="content-body">
              内容就在这里
              <br />内容就在这里
              <br />内容就在这里
              <br />内容就在这里
              <br />内容就在这里
              <br />内容就在这里
              <br />
            </div>
          </section>
          <section class="imgs">
            <ul>
              <li>
                <img src="../../assets/seens/seen1.jpg" alt />
              </li>
              <li>
                <img src="../../assets/slider/wow-bg2.jpg" alt />
              </li>
              <li>
                <img src="../../assets/slider/wow-bg3.jpg" alt />
              </li>
              <li>
                <img src="../../assets/seens/seen4.jpg" alt />
              </li>
            </ul>
          </section>
          <section class="content-operation">
            <div>
              <span>
                <i class="fa fa-eye" aria-hidden="true"></i>&nbsp;浏览了：257次
              </span>
            </div>
            <div>
              <span>
                <i class="fa fa-heart-o" aria-hidden="true"></i>&nbsp;0
              </span>
              <span>
                <i class="fa fa-comment" aria-hidden="true"></i>&nbsp;评论
              </span>
              <span>
                <i class="fa fa-share" aria-hidden="true"></i>&nbsp;分享
              </span>
            </div>
          </section>
        </main>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-content-dynamic",
  data() {
    return {};
  }
};
</script>
<style scoped>
.home-content-dynamic {
  display: flex;
  justify-content: center;
  padding: 10px;
  border-radius: 3px;
}
.dleft {
  width: 10%;
  margin-right: 5%;
}
.dleft .logo {
  width: 100%;
}
.dleft .logo img {
  width: 100%;
  border: 2px solid #fff;
  border-radius: 3px;
}
.dleft .logo:hover img {
  border: 2px solid rgba(170, 136, 170, 0.667);
  transform: scale(1.1);
}
.dright {
  width: 85%;
}
.dright .imgs ul {
  margin: 10px 0;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.dright .imgs ul li {
  width: 33.333333%;
}
.dright .imgs ul img {
  width: 100%;
  vertical-align: middle;
  border: 2px solid #fff;
  box-shadow: #ccc 0 0 5px;
}
article {
  background: url(../../assets/dynamic/small-bg1.png) no-repeat;
  background-position: right top;
  background-color: #fff;
  background-size: 200%;
  padding: 20px;
  text-align: left;
  border-radius: 3px;
  position: relative;
}
.name{
    color:#333;
    font-size:0.8em;
    position: absolute;
    left:0;
    margin-left:20px;
    top:0.5em;
}
h3 {
  height: 2em;
  line-height: 2em;
  font-size: 1em;
  margin: 0;
}
.content-info {
  margin: 0;
}
.content-info .time {
  font-size: 0.8em;
  color: #333;
}
.content-body {
  font-size: 0.9em;
  padding: 5px;
  background: #fafafa;
  border-radius: 2px;
}
.content-operation {
  color: #666;
  font-size: 0.8em;
  background: #fafafa;
  line-height: 2em;
  height: 2em;
  display: flex;
  justify-content: space-between;
}
.content-operation span {
  margin-right: 10px;
}
</style>

