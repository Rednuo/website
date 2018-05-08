<template>
  <div id="app">
    <!--<loginDiv @transferUser="getUser"></loginDiv>-->
    <HeaderDiv :logo="logoMsg"></HeaderDiv>
    <router-view/>
    <!--<footerDiv></footerDiv>-->
  </div>
</template>

<script>
  import HeaderDiv from '@/components/header'
  import loginDiv from '@/components/login'
  import footerDiv from '@/components/footer'
export default {
  name: 'App',
  data(){
    return{
      logoMsg:'Red',
      user:''
    }
  },
  components:{
    HeaderDiv,
    footerDiv,
    loginDiv
  },
  methods:{
    getUser(msg){
      this.user=msg
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
}
</style>
