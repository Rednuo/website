<template>
  <footer class="footer">
    <div class="content">
      <small>
        上海添璎网络科技有限公司 <br>
        联系我们：021-54393188<br>
        宝贝桥QQ群：744561099<br>
        客户服务QQ：3385641625<br>
        商务合作QQ：2178296128<br>
        Copyright © 2014-2018 BAOBEIQIAO.CN All Rights Reserved<br>
        全部信息归宝贝桥版权所有，未经许可，严禁转载 | 沪ICP备18013703号 <br>
        <a href="">隐私政策</a>
        <a href="">用户使用协议</a>
      </small>
      <div class="footerCode">
        <img src="../assets/wx.png" alt="">
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footerDiv',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  a{
    text-decoration: none;
    color: #777;
  }
  .footer{
    width: 100%;
    padding: 36px 0;
    background-color: #ececec;
    font-size: 16px;
    line-height: 24px;
    color: #5e5e5e;
    .content{
      position: relative;
      width: 1200px;
      margin: 0 auto;
      .footerCode{
        width: 126px;
        position: absolute;
        right: 0;
        top:0;
        img{
          width: 126px;
        }
      }
    }
    a{
      text-decoration: underline;
    }
  }
</style>
