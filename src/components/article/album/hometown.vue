<template>
  <div class="body">
    <article class="article">
      <h2>家乡</h2>
      <h3>- 1992.01.12 - 2008-09-01</h3>
      <p>读别人的故事， 常常惊讶于作者对久远细节的描述， 真希望自己也能有这样清晰的记忆。 这或许也不算是什么奢望， 许多悠远的往事其实都忠实地记录在大脑中， 可是尘积已久的记忆就像压在大石头下面的藏宝箱， 知道它在那里， 却怎么也拿不到。 常常在做梦时恍恍忽忽地想起了什么， 醒来后想翻开石头看个究竟， 可是时间老人压上去的石头， 又有谁能翻得开？</p>
      <div class="img"><img src="../../../assets/banner_help.png" alt=""></div>
      <p>情人港 (Darling Harbor - 也译作达令港) 是悉尼市中心一处美丽、 浪漫、 摩登的港湾</p>
      <div class="img"><img src="../../../assets/bg.png" alt=""></div>
      <p>情人港 (Darling Harbor - 也译作达令港) 是悉尼市中心一处美丽、 浪漫、 摩登的港湾</p>
    </article>
    <div class="title">相关链接</div>
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
    name: 'hometown',
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
      .img{
        width: 84%;
        margin: 20px auto;
        border:1px solid #000;
        box-sizing: border-box;
        padding: 3px 3px 0;
        img{
          width: 100%;
          border:1px solid #000;
        }
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
