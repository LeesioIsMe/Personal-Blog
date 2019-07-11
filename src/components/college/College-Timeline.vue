<template>
  <div class="college-timeline">
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >{{activity.content}}</el-timeline-item>
    </el-timeline>
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities2"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >{{activity.content}}</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  name: "college-timeline",
  data() {
    return {
      activities: [
        {
          content: "踏入河南理工大学",
          timestamp: "2015-09-07 10:00",
          size: "large",
          type: "primary",
          icon: "el-icon-s-flag",
          color: "red"
        },
        {
          content: "英语四级，计算机二级C语言",
          timestamp: "2016-12-14 08:00",
          color: "#0bbd87",
          type: "primary",
          icon: "el-icon-s-flag"
        },
        {
          content: "英语六级（玩完）",
          timestamp: "2017-06-15 15:00",
          size: "normal",
          color: "red",
          type: "primary",
          icon: "el-icon-close"
        },
        {
          content: "英语六级（再次玩完）",
          timestamp: "2017-12-14 15:00",
          color: "red",
          type: "primary",
          size: "normal",
          icon: "el-icon-close"
        },
        {
          content: "英语六级（又一次玩完，放弃了）",
          timestamp: "2018-06-15 15:00",
          size: "normal",
          type: "primary",
          color: "red",
          icon: "el-icon-close"
        },
        {
          content: "计算机三级数据库，so easy",
          timestamp: "2018-09-06 08:00",
          color: "green",
          type: "primary",
          icon: "el-icon-check"
        }
      ],
      activities2: [
        {
          content: "学C语言，初学编程，半途而废",
          timestamp: "2015-10-01 00:00",
          size: "large",
          type: "primary",
          icon: "el-icon-s-flag",
          color: "orange"
        },
        {
          content: "学MySQL，增删查改，存储过程",
          timestamp: "2015-12-31 00:00",
          color: "green",
          type: "primary",
          icon: "el-icon-check"
        },
        {
          content: "学HTML,css,js，静态页面",
          timestamp: "2017-11-01 00:00",
          size: "normal",
          color: "green",
          type: "primary",
          icon: "el-icon-check"
        },
        {
          content: "学jQuery，动态存取",
          timestamp: "2018-08-01 00:00",
          color: "green",
          type: "primary",
          size: "normal",
          icon: "el-icon-check"
        },
        {
          content: "学Node，服务器端",
          timestamp: "2018-10-31 00:00",
          size: "normal",
          type: "primary",
          color: "green",
          icon: "el-icon-check"
        },
        {
          content: "学Vue，学会了真的牛逼了，码ing...",
          timestamp: "2019-02-01 00:00",
          color: "green",
          type: "primary",
          icon: "el-icon-check"
        }
      ]
    };
  }
};
</script>
<style scoped>
.college-timeline {
  text-align: left;
  padding: 0 10px;
  display: flex;
  justify-content: space-around;
}

</style>

