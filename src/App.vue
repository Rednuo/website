<template>
  <div id="app">
    <!--<loginDiv @transferUser="getUser"></loginDiv>-->
    <div class="user">
      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTip">{{tip}}</p>
        <input type="text" placeholder="请输入账号" v-model="account">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button type="submit" class="btn" @click="login">登录</button>
        <span v-on:click="ToResister">没有账号？马上注册</span>
      </div>
      <div class="register-wrap" v-show="showResister">
        <h3>注册</h3>
        <p v-show="showTip">{{tip}}</p>
        <input type="text" placeholder="请输入账号" v-model="newAccount">
        <input type="password" placeholder="请输入密码" v-model="newPassword">
        <button type="submit" class="btn" @click="register">注册</button>
        <span v-on:click="ToLogin">已有账号？马上登录</span>
      </div>
      <div class="logined" v-show="showLogined"> {{account}}，欢迎你 <a href="" @click="quit">退出</a></div>
      <div class="unlogin" v-show="showPreLogin">
        <span v-on:click="ToLogin">登录</span>
        <span v-on:click="ToResister">注册</span>
      </div>
    </div>
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
  import {setCookie,getCookie,delCookie} from './assets/js/cookie'
  export default {
    mounted(){
//      let uname=getCookie('account');
//      this.name=uname;
      /*如果cookie不存在，则跳转到登录页*/
//      if(uname==""){
//        this.showLogin=true;
//      }
      if(getCookie('account')){
        this.showLogin=false;
      }
    },
    name: 'App',
    data(){
      return{
        logoMsg:'Red',
        user:'',
        account: '',
        newAccount:'',
        password:'',
        newPassword:'',
        showTip:false,
        showLogin:false,
        showResister:false,
        showLogined:false,
        showPreLogin:true,
        tip:''
      }
    },
    components:{
      HeaderDiv,
      sideDiv,
      footerDiv
    },
    methods:{
      login(){
        if(this.account==''||this.password==''){
          alert("请输入用户名或密码")
        }else{
          let params={
            account:this.account,
            password:this.password
          };
          this.$http.get('/api/login/getAccount',params)
            .then((res)=>{
              const dataAll=res.data;
              for(let i=dataAll.length-1;i>=0;i--){
                if(this.account!=dataAll[i].account && this.password==dataAll[i].password){
                  this.tip="该用户不存在";
                  this.showTip=true;
                }else if(this.account==dataAll[i].account && this.password!=dataAll[i].password){
                  this.tip="密码输入错误";
                  this.showTip=true;
                }else if(this.account==dataAll[i].account=='admin'){
                  this.$router.push('./view/main')
                }else if(this.account==dataAll[i].account && this.password==dataAll[i].password){
                  this.tip="登录成功";
                  this.showTip=true;
                  setCookie('account',this.account,1000*60);
                  setTimeout(function () {
                    this.showLogin=false;
                    this.showLogined=true;
                    this.showPreLogin=false;
                  }.bind(this),1000)
                }
              }
            })
            .catch((reject)=>{
              console.log(reject)
            });
        }
      },
      quit(){
        delCookie('account')
      },
      register(){
        if(this.newAccount==''||this.newPassword==''){
          alert("请输入用户名或密码")
        }
        let params={
          account:this.newAccount,
          password:this.newPassword
        };
        setTimeout(function () {
          this.showLogin=true;
          this.showLogined=false;
          this.showPreLogin=false;
          this.showResister=false;
        }.bind(this),1000);
        return this.$http.post('/api/login/createAccount',params);
      },
      ToResister(){
        this.showLogin=false;
        this.showResister=true;
        this.showPreLogin=false;
      },
      ToLogin(){
        this.showLogin=true;
        this.showResister=false;
        this.showLogined=false;
        this.showPreLogin=false;
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
  .user{
    text-align: center;
    span{
      cursor: pointer;
    }
  }
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
