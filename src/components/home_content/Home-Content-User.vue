<template>
  <div class="home-content-user">
    <form>
      <div class="form-group">
        <label for="userName" ref="userName" :class="{borderGreen:userNameBorderGreen}">
          <i class="fa fa-user" aria-hidden="true"></i>
          <input
            type="text"
            id="userName"
            placeholder="用户名"
            v-model="userName"
            @focus="changeBorder('userName',1)"
            @blur="changeBorder('userName',0)"
          />
        </label>
      </div>
      <div class="form-group">
        <label for="password" ref="password" :class="{borderGreen:passwordBorderGreen}">
          <i class="fa fa-eye" aria-hidden="true"></i>
          <input
            type="text"
            id="userName"
            placeholder="密码"
            v-model="password"
            @focus="changeBorder('password',1)"
            @blur="changeBorder('password',0)"
          />
        </label>
      </div>
      <div class="form-group btnGroup">
        <button class="btnLogin" type="submit" @click.prevent="login">登陆</button>
        <span class="icon-seperator">or</span>
        <button class="btnRegister" type="submit" @click.prevent="register">注册</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "home-content-user",
  data() {
    return {
      errorUserName: "格式错误，6-16位的字母数字下划线",
      errorPassword: "密码错误",
      userNameBorderGreen: false,
      passwordBorderGreen: false,
      userName: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["red", "userNameIsError", "passwordIsError", "pageLoading"])
  },
  methods: {
    ...mapMutations(["checkUserName", "checkPassword", "togglePageLoading"]),
    changeBorder(labelName, status) {
      labelName == "userName"
        ? (this.userNameBorderGreen = status)
        : (this.passwordBorderGreen = status);
    },
    hidePageLoading() {
      setTimeout(() => {
        this.togglePageLoading(0);
      }, 2000);
    },
    login() {
      this.togglePageLoading(1);
      this.hidePageLoading();
    },
    register() {
      this.togglePageLoading(1);
      this.hidePageLoading();
    }
  },
  watch: {
    userName(newVal, oldVal) {
      this.checkUserName(newVal);
    },
    password(newVal, oldVal) {
      this.checkPassword(newVal);
    }
  },
  mounted(){
    console.log("Aaaaaaaaaaaaaaaaa");
    console.log(this)
    // console.log(this.$ajax);
    // this.$axios
    //   .get("/api/lixianhao")
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(err => {
    //     throw err;
    //   });
  }
};
</script>

<style scoped>
.home-content-user {
  text-align: left;
  background: #fff;
  padding: 10px;
  border-radius: 3px;
}
.help-text {
  font-size: 0.8em;
}
.form-group label {
  position: relative;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-group label input {
  width: 100%;
  border: none;
  height: 2.4em;
  line-break: 2.4em;
  font-size: 0.8em;
  padding: 0 10px;
  outline: none;
}
.form-group label i {
  display: block;
  width: 1em;
  height: 1em;
  font-size: 1em;
  left: 10px;
  top: 1em;
  margin-left: 10px;
}
.borderGreen {
  border: 1px solid green !important;
}
.btnGroup {
  text-align: center !important;
  padding: 0 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.btnGroup .btnLogin,
.btnGroup .btnRegister {
  /* font-size: 0.8em; */
  border: none;
  outline: none;
  cursor: pointer;
  background: rgb(100, 100, 200);
  color: #fff;
  padding: 0.5em 0;
  border-radius: 3px;
  margin: 0;
  width: 48%;
}
.btnGroup .btnRegister {
  background: green;
}
.icon-seperator {
  /* font-size: 0.8em; */
  width: 1.6em;
  height: 1.6em;
  line-height: 1.6em;
  text-align: center;
  background: #fff;
  position: absolute;
  border-radius: 50%;
  left: calc(50% - 0.8em);
}
</style>
