<template>
  <div class="hello">
    <div class="banner">
      <img src="../assets/banner_about.png" alt="">
      <div class="download">
        <a href="http://android.myapp.com/myapp/detail.htm?apkName=com.tianying.babybridge" target="_blank" onclick="_czc.push(['_trackEvent', 'Android', '下载', '安卓','1','']);" id="android"></a>
        <a href="" id="iPhone"></a>
      </div>
    </div>
    <section class="main about">
      <div class="content">
        <section class="section">
          <h2>宝贝桥简介</h2>
          <p>宝贝桥app是一款适合0-6岁儿童的早教产品，孩子在这里可以学拼音、学数学、读英语、听故事、唱儿歌，可爱的彩尾熊贝贝和乔乔是孩子成长的小伙伴，全方位陪伴孩子一起享受知识的乐趣。大量的互动早教内容，持续更新，是孩子成长过程中必备的成长助手。拥有全面的教学体系，智慧妈妈的推荐。</p>
        </section>
        <section class="section">
          <h2>联系方式</h2>
          <div>
            <p>
              上海添璎网络科技有限公司 <br>
              联系我们：021-54393188<br>
              联系电话：021-54393188<br>
              宝贝桥QQ群：744561099<br>
              商务合作QQ：3385641625<br>
              公司地址：上海闵行区万源路2158号泓毅大厦B座
            </p>
            <div class="code"></div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .banner{
    position: relative;
    img{
      width: 100%;
    }
    .download{
      position: absolute;
      width: 20%;
      top: 40%;
      left: 36%;
      height: 56%;
      a{
        display: block;
        width: 18%;
        height: 30%;
        cursor: pointer;
      }
    }
  }
  .english {
    padding-top: 1em;
    background: #f9b136 url(../assets/bg.png) no-repeat 50%;
    background-size: cover;
    .description {
      width: 20em;
      right: 2em;
      top: 14em;
    }
  }
  .main{
    .content {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      img{
        width: 90%;
      }
      .description {
        line-height: 1.8em;
        color: #000;
        font-size: 20px;
        position: absolute;
      }
    }
    .math{
      .description{
        width: 21em;
        left: 0;
        top: 14em;
      }
    }
    .pinyin {
      padding: 3em 0;
      .description {
        width: 20em;
        left: 0;
        top: 14em;
      }
    }
  }
</style>
