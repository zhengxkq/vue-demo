<template>
  <div class="loginContainer">
    <head-top></head-top>
    <form class="loginForm">
      <section class="input_container phone_number">
        <input type="text" placeholder="账号密码随便输入" name="phone" maxlength="11" v-model="phoneNumber">
        <button>获取验证码</button>
        <button>已发送(s)</button>
      </section>
      <section class="input_container">
        <input type="text" placeholder="验证码" name="mobileCode" maxlength="6" v-model="mobileCode">
      </section>
    </form>
    <form class="loginForm"></form>
  </div>
</template>
<script>
  import headTop from '../../components/header/head.vue';

  export default {

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

  }
}
</style>
