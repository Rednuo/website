<template>
  <div id="app">
    <!--<loginDiv @transferUser="getUser"></loginDiv>-->
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
        user:''
      }
    },
    components:{
      HeaderDiv,
      sideDiv,
      footerDiv
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
