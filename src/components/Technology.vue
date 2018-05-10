<template>
  <div class="body">
    <article class="article">
      <h2>技术广角</h2>
      <h3>- TECHNOLOGY -</h3>
      <p>浩瀚夜空，遥远的角落挂着一颗蓝蓝的星球，缓缓的转动最美好的已远走</p>
      <span>“梦开始的地方” (by 童安格 苏来)</span>
    </article>
    <div class="title">文章</div>
    <ul class="inner">
      <li><router-link to="/article/technology/web">童年回忆集锦 收录了有关童年的一些回忆片断</router-link></li>
    </ul>
    <div class="title">编程</div>
    <ul class="inner">
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
    </ul>
    <div class="title">软件</div>
    <ul class="inner">
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
    </ul>
    <div class="title">其它</div>
    <ul class="inner">
      <p>要说的话要说的话要说的话要说的话要说的话要说的话要说的话要说的话</p>
      <li><a href="">童年回忆集锦 收录了有关童年的一些回忆片断。</a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'technology',
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
      padding-bottom: 60px;
      position: relative;
      font-family: KaiTi, KaiTi_GB2312, FangSong, FangSong_GB2312;
      span{
        position: absolute;
        right: 20px;
        bottom:15px;
      }
      p{line-height: 24px;text-align: left;margin-top: 40px}
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
