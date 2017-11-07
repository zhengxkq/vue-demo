<template>
  <div class="loginContainer">
    <head-top></head-top>
    <form class="loginForm" v-if="loginWay">
      <section class="input_container phone_number">
        <input type="text" placeholder="账号密码随便输入" name="phone" maxlength="11" v-model="phoneNumber">
        <button>获取验证码</button>
        <button>已发送(s)</button>
      </section>
      <section class="input_container">
        <input type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
      </section>
    </form>
    <form class="loginForm" v-else>
      <setion class="input_container">
        <input type="text" placeholder="账号">
      </setion>
      <setion class="input_container">
        <input type="password" v-if="!showPassword" placeholder="密码" v-model="passWord">
        <input type="text" v-else placeholder="密码" v-model="password">
      </setion>

    </form>
  </div>
</template>
<script>
  import headTop from '../../components/header/head.vue';

  export default {
    data(){
      return{
        loginWay:false,//登陆方式，默认短信登陆
        showPassword:false//是否显示密码
      }
    }
  }

</script>
<style lang="scss" scoped>
@import "../../style/mixin.scss";

  .loginContainer{
    padding-top: 1.95rem;
    p,span,input{
      font-family: Helvetica Neue,Tahoma,Arial;
    }
  }
.loginForm{
background-color: #fff;
  margin-top: .6rem;
  .input_container{
    display: flex;
    justify-content: space-between;
    padding:.6rem .8rem;
    border-bottom: 1px solid #f1f1f1;
    input{

    }
  }
}
</style>
