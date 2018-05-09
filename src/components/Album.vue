<template>
  <div class="body">
    <article class="article">
      <h2>浮光掠影</h2>
      <h3>- ALBUM -</h3>
      <span>地名</span>
      <span>地名</span>
      <span>地名</span>
      <span>地名</span>
    </article>
    <div class="title">地名(Diming)</div>
    <ul class="inner">
      <li><router-link to="/article/album/hometown">童年回忆集锦 收录了有关童年的一些回忆片断</router-link></li>
    </ul>
    <div class="title">地名(Diming)</div>
    <ul class="inner">
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
    </ul>
    <div class="title">地名(Diming)</div>
    <ul class="inner">
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
    </ul>
    <div class="title">地名(Diming)</div>
    <ul class="inner">
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
    </ul>
    <div class="title">地名(Diming)</div>
    <ul class="inner">
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'album',
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
    list-style: square;
    margin-left: 2em;
  }
  h2,h3{
    color: @heightYellow;
  }
  .body {
    float: right;
    width: 696px;
    min-height: 710px;
    padding: 20px 25px;
    border:1px solid @borderColor;
    border-bottom:0;
    border-left: 0;
    font-size: 14px;
    .article{
      text-align: center;
      padding-bottom: 40px;
      font-family: KaiTi, KaiTi_GB2312, FangSong, FangSong_GB2312;
      span{
        display: inline-block;
        padding: 5px;
        border:1px solid @heightYellow;
      }
      p{line-height: 24px}
    }
    .title{
      width: 96%;
      height: 25px;
      line-height: 25px;
      padding: 0 5px;
      background-color: @lightYellow;
      font-weight: bold;
    }
    .inner{
      padding: 10px 0 20px;
    }
    ul{
      padding-left: 1em;
      li{
        line-height: 2em;
      }
    }
  }
</style>
