import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BASE_URL: "http://192.168.16.101:3000",
    red: "red",
    orange: "orange",
    green: "green",
    black: "black",
    userNamePattern: /^[a-zA-Z0-9_.@$]{6,16}$/,
    passwordPattern: /^[a-zA-Z0-9_]{6,16}$/,
    userNameIsError: false,
    passwordIsError: false,
    pageLoading: false,
    isShowLizi: true,
    isPhone: true,
    transform: "perspective(1000px) scale(0.4)"
  },
  mutations: {
    checkUserName(state, patternString) {
      state.userNameIsError = !state.userNamePattern.test(patternString)
    },
    checkPassword(state, patternString) {
      state.passwordIsError = !state.passwordPattern.test(patternString)
    },
    togglePageLoading(state, status) {
      console.log(status)
      state.pageLoading = status;
    },
    changePhoneStatus(state, status) {
      console.log(status)
      state.isPhone = status;
      if (state.isPhone) {
        state.transform = "perspective(1000px) scale(0.4)"
      }else{
        state.transform = "perspective(1000px)"
      }
    }
  },
  actions: {

  }
})
