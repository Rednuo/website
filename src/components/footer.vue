<template>
  <footer class="footer">
    今日心情：down
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
  @borderColor:#a8a8a8;
  @bgColor:#f0f0f0;
  @btnColor:#cacbcb;
  @lightFont:#757575;
  @heightYellow:#e3c338;
  @lightYellow:#fae585;
  a{
    text-decoration: none;
    color: #777;
  }
  .footer{
    width: 100%;
    padding: 6px 0;
    margin-top: 8px;
    font-size: 14px;
    line-height: 24px;
    color: #5e5e5e;
    text-align: center;
    border-top: 1px solid @borderColor;
    border-bottom: 1px solid @borderColor;
  }
</style>
