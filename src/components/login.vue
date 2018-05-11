<template>
  <div class="body">
    <input type="text" id="inputEmail" placeholder="请输入账号" v-model="account">
    <input type="password" id="inputPassword" placeholder="请输入密码" v-model="password">
    <button type="submit" class="btn" @click="login">登录</button>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        account: '',
        password:''
      }
    },
    methods:{
      login(){
        this.$http.get('/api/login/getAccount')
          .then((response)=>{
          console.log(response);
          let params={
            account:this.account,
            password:this.password
          };
          return this.$http.post('/api/login/createAccount',params)
          })
          .then((response)=>{
          console.log(response)
          })
          .catch((reject)=>{
          console.log(reject)
          })
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @borderColor:#a8a8a8;
  @bgColor:#f0f0f0;
  @btnColor:#cacbcb;
  @lightFont:#757575;
  @heightYellow:#e3c338;
  @lightYellow:#fae585;
  p,ul,li{margin: 0;padding: 0;}
  a{
    text-decoration: underline;
    color: #333;
  }
  ul,li{
    list-style: none;
  }
  .body {
    float: right;
    width: 696px;
    min-height: 710px;
    padding-top: 20px;
    padding-left: 25px;
    padding-right: 25px;
    border:1px solid @borderColor;
    border-left: 0;
    font-size: 14px;
    padding-bottom: 2000px;
    margin-bottom: -2000px;
  }
</style>
