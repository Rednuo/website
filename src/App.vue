<template>
  <div id="app">
    <!--<loginDiv @transferUser="getUser"></loginDiv>-->
    <input type="text" id="inputEmail" placeholder="请输入账号" v-model="account">
    <input type="password" id="inputPassword" placeholder="请输入密码" v-model="password">
    <button type="submit" class="btn" @click="login">登录</button>
    <HeaderDiv :logo="logoMsg"></HeaderDiv>
    <section class="main">
      <sideDiv></sideDiv>
      <router-view/>
    </section>
    <footerDiv></footerDiv>
  </div>
</template>

<script>
  import HeaderDiv from '@/components/header'
  import sideDiv from '@/components/side'
  import footerDiv from '@/components/footer'
  export default {
    name: 'App',
    data(){
      return{
        logoMsg:'Red',
        user:'',
        account: '',
        password:''
      }
    },
    components:{
      HeaderDiv,
      sideDiv,
      footerDiv
    },
    methods:{
      login(){
        const self=this;
        self.$http.get('/api/login/getAccount')
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

<style scoped lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  border-bottom: 1px solid @borderColor;
  padding-bottom: 6px;
  @borderColor:#a8a8a8;
  @bgColor:#f0f0f0;
  @btnColor:#cacbcb;
  @lightFont:#757575;
  @heightYellow:#e3c338;
  @lightYellow:#fae585;
  .main{
    width: 900px;
    /*height: 750px;*/
    margin: 0 auto;
    overflow: hidden;
    zoom: 1;
    border-bottom: 1px solid @borderColor;
    &:before,&:after{
      content:'';
      display:table;
    }
    &:after{
      clear: both;
    }
  }
}
</style>
