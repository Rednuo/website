<template>
  <div class="header">
    <div class="content">
      <ul class="nav">
        <li v-for="nav in navs"><router-link :to="nav.path">{{nav.li}}</router-link></li>
      </ul>
      <div class="msg">{{msg}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'headerDiv',
    data () {
      return {
        navs: [
          {li:'网站首页',path:'/'},
          {li:'往昔追忆',path:'/Retrospect'},
          {li:'浮光掠影',path:'/Album'},
          {li:'学习广角',path:'/Technology'},
          {li:'我的文章',path:'/Technology'}
        ],
        msg: '欢迎访问red个人主页'
      }
    },
    props:['logo']
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
  a{
    text-decoration: none;
    color: #000;
  }
  .header{
    width: 100%;
    /*height: 78px;*/
    padding-top: 6px;
    padding-bottom: 6px;
    margin-top: 28px;
    border-top: 1px solid @borderColor;
    /*border-bottom: 1px solid #000;*/
    .content{
      width: 100%;
      border-top: 1px solid @borderColor;
      border-bottom: 1px solid @borderColor;
      text-align: center;
      .nav{
        font-size: 0;
        margin-bottom: 6px;
        border-bottom: 1px solid @borderColor;
        li{
          display: inline-block;
          height: 42px;
          line-height: 44px;
          padding: 0 20px;
          text-align: center;
          font-size: 16px;
          border-left: 1px solid @borderColor;
          border-right: 1px solid @borderColor;
          a{
            font-weight: bold;
          }
        }
        li.active,li:hover{
          background-color: @btnColor;
          a{
            font-weight: bold;
          }
        }
      }
      .msg{
        border-top: 1px solid @borderColor;
        line-height: 28px;
        font-size: 14px;
        letter-spacing: 1em;
      }
    }
  }
</style>
