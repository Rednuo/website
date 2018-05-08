<template>
  <div class="login">
    <label>
      <span>用户名：</span>
      <input type="text" v-model="username" @change="setUser">
    </label>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username:''
      }
    },
    methods:{
      setUser:function () {
        this.$emit('transferUser',this.username)
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
  .login{
    width: 300px;
    padding: 50px 20px;
    position: fixed;
    top:40%;
    left: 50%;
    z-index: 999;
    margin-left: -150px;
    background-color: #fff;

  }
</style>
