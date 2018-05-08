<template>
  <div class="hello">
    <div class="banner">
      <img src="../assets/banner_help.png" alt="">
      <div class="download">
        <a href="http://android.myapp.com/myapp/detail.htm?apkName=com.tianying.babybridge" target="_blank" onclick="_czc.push(['_trackEvent', 'Android', '下载', '安卓','1','']);" id="android"></a>
        <a href="" id="iPhone"></a>
      </div>
    </div>
    <section class="main about">
      <div class="content">
        <section class="section">
          <h2>如何注册？</h2>
          <p>
            1. 从主界面右上方进入“家长中心” <br>
            2. 点击“注册“按钮<br>
            3. 输入手机号和接收到的验证码，并设置密码，点击注册，完成设置。<br>
            4. 或者您可以使用微信直接登录。
          </p>
        </section>
        <section class="section">
          <h2>无法注册或登录成功？</h2>
          <p>
            建议您更换网络尝试或者使用自己的4G网络尝试更多问题可以关注我们的公众号：<b>宝贝桥BabyBridge</b>或者加入QQ群<b>744561099</b>。
          </p>
        </section>
        <section class="section">
          <h2>如何设置休息时间，引导宝宝正常作息？</h2>
          <p>
            1. 从主界面进入“家长中心” <br>
            2. 在”时长设置“栏中可以选择”十五分钟“，”三十分钟“，”无限制“设置。家长可根据宝宝使用情况来设置使用时长。<br>
            3.选择完之后，直接关闭，完成设置。
          </p>
        </section>
      </div>
    </section>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'help',
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
