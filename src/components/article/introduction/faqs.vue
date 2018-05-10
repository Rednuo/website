<template>
  <div class="body">
    <article class="article">
      <h2>FAQs</h2>
      <h3>- red -</h3>
      <h4>1、为什么要建网站？</h4>
      <p>刚开始编写这个网站的时候， 有朋友问我为什么要编写网站？ 后来越来越多的人有了自己的网站， 便没人问了， 所谓见多不怪吧。 也许再过若干年， 有网站会象有家庭有住址一样天经地义。 那时侯， 一个没网站的人或许倒会象一个无家可归者一样被人问道： 你怎么会没有网站的？</p>
      <p>谁也不想在未来的数字世界中做一个无家可归者， 于是就有了这个网站。</p>
      <p>当然， 这是避重就轻的说法。 每个人都想盖房子， 但为什么在某个时间、 某个地点、 盖某种式样的房子， 还是有具体原因的。</p>
      <h4>2、为什么要写文章？</h4>
      <p>一个人念了二十几年书， 在阅读和思考中度过了生命的大多数清醒时间， 为什么不把自己的想法、 经历和经验写下来？ 人的记忆总是要衰退的， 十几二十年后当自己都不记得自己做过的事、 说过的话、 学过的东西时， 生命岂不变得很虚幻？ 从这个意义上讲写作岂非就是对生命最好的纪念和珍惜？</p>
      <h4>3、这是一个什么类型的网站？</h4>
      <p>这个网站的编写动机及内容取舍在过去几年中已几经变化， 今后或许还会有进一步的变化。 但无论怎么变化， 这个网站过去大部分时间是、 现在和未来也仍将是一个纯粹的个人主页， 它所体现的是站长本人的风格、 兴趣及观点。</p>
      <h4>4、这个网站的主要内容是什么？</h4>
      <p>这个网站的内容按主题大致可分为以下四类： <br>
        1、与站长本人有关的文章、 资料及站长在各地旅行时拍摄的相片， 主要收录于 往昔追忆 和 浮光掠影 两个栏目中。<br>
        2、站长撰写的有关科学 (主要是物理学、 天文学和数学) 及相关话题的文章， 主要收录于 科学园地 一栏中， 这是这个网站的主体部分。<br>
        3、站长撰写的有关技术领域的文章及编写的软件等， 主要收录于 技术广角 一栏中。<br>
        4、站长撰写的有关时事、 政治、 社会、 人文等方面的评论及其它杂文、 小说等， 主要收录于 笑傲江湖 一栏中。
      </p>
    </article>
  </div>
</template>
<script>
  export default {
    name: 'faqs',
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
    h4{
      color: @heightYellow;
    }
    .article{
      padding-bottom: 70px;
      p{
        text-indent: 2em;
        margin: 8px 0;
      }
    }

  }
</style>
