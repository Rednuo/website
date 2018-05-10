<template>
  <div class="body">
    <article class="article">
      <h2>FAQs</h2>
      <h3>- red -</h3>
      <div class="link">
        <a href="">有关文字的说明</a>
        <a href="">版权说明</a>
        <a href="">有关本站图片的说明</a>
      </div>
      <div class="title">1、有关文字的说明</div>
      <p>1、本人在传统媒体上发表的任何文字， 均可在本站找到全文或说明。</p>
      <p>2、本人在互联网上发表的任何 300 字以上的文字， 均可在本站找到全文。</p>
      <p>凡不符合以上两条 (即无法在本站找到全文或说明) 却冠以本人姓名或笔名的文字， 均非本人所作。</p>
      <p>对于本人文字， 凡本站版本与发表在其它场合的版本有出入者， 本人的观点一律以本站版本为准。</p>
      <p>此外， 有些出版物在发表本人作品时附有 “编者按”、 “编后语” 等介绍本人背景的文字， 此类文字有很多未经本人过目及认可， 内容也多有差错， 只代表他人观点。</p>
      <div class="title">2、版权说明</div>
      <p>本站的所有文章皆为本人撰写。</p>
      <p>任何网络媒体均可建立对本站或站内任何文章的直接链接。 以下版权声明只针对以复制等手段转载或引用本人作品者。</p>
      <p>任何个人及媒体在转载或引用本人作品时请遵守以下版权要求： </p>
      <p>1、注明转载。</p>
      <p>2、注明本人姓名 (卢昌海)。</p>
      <p>3、注明本站网址 (http://www.changhai.org)， 或所转文章在本站的文章网址。</p>
      <p>4、转载或引用本人的翻译作品时， 须同时注明原作者姓名。</p>
      <p>5、传统媒体转载本人的文章前， 请预先通知本人。</p>
      <p>6、转载本人曾发表于传统媒体的文章 (即列举在 已发表作品列表 中的文章) 前， 请自行处理与那些传统媒体的版权关系。</p>
      <p>7、对本人文字的修改或翻译， 须征得本人同意才可发表。</p>
      <p>8、本人的文章若附有单独的版权声明， 则除上述各条外， 还须遵守文章所附的版权声明 (两者矛盾的部分以文章所附的版权声明为准)。</p>
      <div class="title">3、有关本站图片的说明</div>
      <p>本站的图片， 除 浮光掠影 栏目中的相片， 及其它栏目中本人或本人亲友的相片外， 其余图片均自己制作。</p>
    </article>
  </div>
</template>
<script>
  export default {
    name: 'copyright',
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
    .link{
      text-align: center;
      margin-bottom: 30px;
      a{
        margin: 0 10px;
      }
    }
    h4{
      color: @heightYellow;
    }
    .article{
      padding-bottom: 70px;
      .title{
        width: 96%;
        height: 25px;
        line-height: 25px;
        padding: 0 5px;
        background-color: @lightYellow;
        font-weight: bold;
      }
      p{
        text-indent: 2em;
        margin: 8px 0;
      }
    }

  }
</style>
