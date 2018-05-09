<template>
  <div class="body">
    <div class="left">
      <div class="title">邮购链接</div>
      <div class="shop"></div>
      <div class="title">随机文选</div>
      <ul class="list">
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
      </ul>
    </div>
    <div class="right">
      <div class="title">最近更新</div>
      <ul class="list">
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
        <li>往昔追忆 <a href="">中学时代</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
    .title{
      width: 96%;
      height: 25px;
      line-height: 25px;
      padding: 0 5px;
      background-color: @lightYellow;
      font-weight: bold;
    }
    .shop{
      width: 100%;
      height: 6em;
    }
    ul{
      padding-left: 1em;
      li{
        line-height: 2em;
      }
    }
    .left,.right{
      float: left;
      width: 316px;
      min-height: 700px;
      padding: 0 15px;
      padding-bottom: 2000px;
      margin-bottom: -2000px;

    }
    .right{
      border-left:1px solid @borderColor;
    }
  }
</style>
