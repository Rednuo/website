<template>
  <div class="hello">
    <section class="main">
      <div class="side">
        <p class="motto">除了自己的无知，我什么都不懂。</p>
        <p class="author">- 苏格拉底</p>
        <div class="time">
          <p>星期二</p>
          <p class="date">8</p>
          <p>二〇一八年五月</p>
        </div>
        <div class="info">
          <span>信息</span>
          <br>
          <a href="">已发表作品列表</a>
          <br>
          <a href="">站长简介</a>
          <a href="">常见问题</a>
          <a href="">版权说明</a>
          <a href="">联系方式</a>
        </div>
        <div class="statistics">
          <span>统计</span>
          <br>
          自2018-05-08以来  <br>
          本站点击数 <br>
          2554 <br>
          昨日点击数56587 <br>
          今日点击数455
        </div>
      </div>
      <div class="body">
        <div class="left">
          <div class="title">邮购链接</div>
        </div>
        <div class="right"></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'index',
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
  .hello{
    border-bottom: 1px solid @borderColor;
    padding-bottom: 8px;
    p{margin: 0;padding: 0;}
    a{
      text-decoration: underline;
      color: #333;
    }
    .main{
      width: 900px;
      height: 750px;
      margin: 0 auto;
      .side {
        float: left;
        width: 150px;
        height: 730px;
        border:1px solid @borderColor;
        padding-top: 20px;
        font-size: 12px;
        .motto,.author{
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .author{
          text-align: right;
          margin-right: 15px;
        }
        .motto{
          margin-left: 16px;
          margin-bottom: 10px;
        }
        .time{
          padding-top: 30px;
          padding-bottom: 20px;
          text-align: center;
          border-bottom: 1px solid @borderColor;
          .date{
            font-family: Impact;
            font-size: 36px;
            margin: 0;
          }
        }
        .info,.statistics{
          position: relative;
          padding: 15px 24px 35px;
          text-align: center;
          span{
            position: absolute;
            top:-16px;
            left: 50%;
            margin-left: -30px;
            display: inline-block;
            border:1px solid @borderColor;
            padding: 5px 1em;
            background-color: #fff;
            font-size: 14px;
            font-weight: bold;

          }
        }
        .info{
          border-bottom: 1px solid @borderColor;
          a{
            line-height: 20px;
          }
        }
        .statistics{
          text-align: center;
        }
      }
      .body {
        float: right;
        width: 696px;
        height: 710px;
        padding: 20px 25px;
        border:1px solid @borderColor;
        border-left: 0;
        .title{
          width: 100%;
          height: 25px;
          line-height: 25px;
        }
        .left,.right{
          float: left;
          border:1px solid @borderColor;
          width: 316px;
          height: 700px;
          padding: 0 15px;

        }
        .right{}
      }
    }
  }

</style>
