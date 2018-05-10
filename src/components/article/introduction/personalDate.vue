<template>
  <div class="body">
    <article class="article">
      <h2>站长简介</h2>
      <img align="right" hspace="5" vspace="5" src="../../../assets/logo.png" alt="">
      <ul class="inner">
        <li>姓名：周红</li>
        <li>性别：女</li>
        <li>家乡：安徽合肥</li>
        <li>教育
          <ul>
            <li>1997.9-2001.7：<a href="">中份小学（小班、大班、一年级、二年级）</a></li>
            <li>2001.9-2002.7：<a href="">阚岗小学（三年级）</a></li>
            <li>2002.9-2005.7：<a href="">阚东小学（四、五、六年级）</a></li>
            <li>2005.9-2008.7：<a href="">石塘中学</a></li>
            <li>2008.9-2011.7：<a href="">肥东一中</a></li>
            <li>2011.9-2015.7：<a href="">安徽理工大学</a></li>
          </ul>
        </li>
        <li>爱好：纪录片、看电影、乒乓球</li>
      </ul>
    </article>
  </div>
</template>
<script>
  export default {
    name: 'personalDate',
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
  h2,h3{
    color: @heightYellow;
    text-align: center;
    font-family: KaiTi, KaiTi_GB2312, FangSong, FangSong_GB2312;
  }
  a{
    text-decoration: underline;
    color: #333;
  }
  ul,li{
    list-style: square;
  }
  .body {
    float: right;
    width: 696px;
    min-height: 711px;
    padding: 20px 25px;
    border:1px solid @borderColor;
    border-bottom:0;
    border-left: 0;
    font-size: 14px;
    .article{
      padding-bottom: 70px;
      ul{
        padding-left: 1em;
        li{
          line-height: 2em;
        }
      }
    }

  }
</style>
