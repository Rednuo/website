<template>
  <div class="body">
    <article class="article">
      <h2>我的文章</h2>
      <!--双边框div 文章来源说明-->
      <table>
        <thead>
        <tr>
          <td>标题</td>
          <td>日期</td>
          <td>操作</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>文章名</td>
          <td>2018-02-23</td>
          <td> <span>编辑</span> <span>删除</span></td>
        </tr>
        </tbody>
      </table>
      <br>
      <p class="divide">*********</p>

    </article>
    <div class="title">往年同日（8月1日）发表作品</div>
    <ul class="inner">
      <li class="center"><a href="">2018-05-02童年</a></li>
      <li class="center"><a href="">童年</a></li>
      <li class="center"><a href="">童年</a></li>
      <li class="center"><a href="">童年</a></li>
    </ul>
    <div class="title">最近发表</div>
    <ul class="inner">
      <li class="center"><a href="">2018-05-02童年</a></li>
      <li class="center"><a href="">童年</a></li>
      <li class="center"><a href="">童年</a></li>
      <li class="center"><a href="">童年</a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'main',
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
    list-style: none;
  }
  .body {
    float: right;
    width: 696px;
    /*height: 710px;*/
    padding: 20px 25px;
    border:1px solid @borderColor;
    border-bottom:0;
    border-left: 0;
    font-size: 14px;
    .article{
      padding-bottom: 70px;
      position: relative;
      span{
        position: absolute;
        right: 20px;
        bottom:15px;
      }
      p{line-height: 24px;text-indent: 2em;margin: 15px 0}
      .center{
        width: 70%;
        margin: 0 auto;
        padding: 5px 15px;
        font-size: 12px;
        border:3px double @borderColor;
      }
      .divide{
        text-align: center;
        letter-spacing: 1em;
      }
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
      p{
        text-indent: 2em;
        margin: 10px 0;
        line-height: 2em;
      }
    }
    ul{
      padding-left: 1em;
      li{
        line-height: 2em;
      }
    }
  }
</style>
