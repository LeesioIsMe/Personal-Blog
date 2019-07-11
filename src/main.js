import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueParticles from "vue-particles"
Vue.use(VueParticles)

import Mint from "mint-ui";
import "mint-ui/lib/style.css";
import { DatetimePicker } from 'mint-ui';
import { Popup } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
Vue.use(Mint);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(DatetimePicker.name, DatetimePicker, Popup);

Vue.config.productionTip = false
// import FontAwesome from "font-awesome";
import "font-awesome/css/font-awesome.min.css";
// Vue.use(FontAwesome)
import "element-ui/lib/theme-chalk/tabs.css"
import "element-ui/lib/theme-chalk/icon.css"
import "element-ui/lib/theme-chalk/calendar.css"
import "element-ui/lib/theme-chalk/button.css"
import "element-ui/lib/theme-chalk/button-group.css"
import "element-ui/lib/theme-chalk/carousel.css"
import "element-ui/lib/theme-chalk/carousel-item.css"
import "element-ui/lib/theme-chalk/timeline.css"
import "element-ui/lib/theme-chalk/timeline-item.css"

import {
  Menu,
  Button,
  ButtonGroup,
  Submenu,
  MenuItem,
  Carousel,
  CarouselItem,
  Loading,
  TabPane,
  Tabs,
  Calendar,
  Timeline,
  TimelineItem
} from "element-ui";
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItem);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Loading);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Timeline);
Vue.use(TimelineItem);

import axios from "axios";
// axios.defaults.withCredentials = true;
// import VueAxios from "vue-axios";
Vue.prototype.$ajax = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
