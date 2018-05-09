<template>
  <div class="body">
    <article class="article">
      <h2>往昔追忆</h2>
      <h3>- red -</h3>
      <p class="center">浩瀚夜空，遥远的角落 <br>
      人来人往，有些爱永不更改<br>
      在你我忘了珍惜的时候<br>
      最美好的已远走</p>
      <p>读别人的故事， 常常惊讶于作者对久远细节的描述， 真希望自己也能有这样清晰的记忆。 这或许也不算是什么奢望，<img align="right" hspace="5" vspace="5" src="../../../assets/logo.png" alt=""> 许多悠远的往事其实都忠实地记录在大脑中， 可是尘积已久的记忆就像压在大石头下面的藏宝箱， 知道它在那里， 却怎么也拿不到。 常常在做梦时恍恍忽忽地想起了什么， 醒来后想翻开石头看个究竟， 可是时间老人压上去的石头， 又有谁能翻得开？</p>
      <p class="divide">*********</p>
      <p>读别人的故事， 常常惊讶于作者对久远细节的描述， 真希望自己也能有这样清晰的记忆。 这或许也不算是什么奢望， 许多悠远的往事其实都忠实地记录在大脑中， 可是尘积已久的记忆就像压在大石头下面的藏宝箱， 知道它在那里， 却怎么也拿不到。 常常在做梦时恍恍忽忽地想起了什么， 醒来后想翻开石头看个究竟， 可是时间老人压上去的石头， 又有谁能翻得开？</p>

      <p>读别人的故事， 常常惊讶于作者对久远细节的描述， 真希望自己也能有这样清晰的记忆。 这或许也不算是什么奢望， 许多悠远的往事其实都忠实地记录在大脑中， 可是尘积已久的记忆就像压在大石头下面的藏宝箱， 知道它在那里， 却怎么也拿不到。 常常在做梦时恍恍忽忽地想起了什么， 醒来后想翻开石头看个究竟， 可是时间老人压上去的石头， 又有谁能翻得开？</p>
      <span>“梦开始的地方” (by 童安格 苏来)</span>
    </article>
    <div class="title">注释</div>
    <div class="inner">
      <p>1.但对于我自己却备感亲切， 算是敝帚自珍吧。</p>
    </div>
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
    name: 'childhood',
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
        font-family: KaiTi, KaiTi_GB2312, FangSong, FangSong_GB2312;
        text-align: center;
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
