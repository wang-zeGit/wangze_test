<template>
  <div id="app">
    <div class="mvvm">
      <router-view/>
    </div>
    <div class="nav">
      <van-tabbar v-model="active" @change="onChange">
      <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="classify" icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">个人</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      active:''
    }
  },
  methods: {
    onChange() {
      if(this.active=='home'){
        this.$router.push('/')
      }else if(this.active == 'classify'){
        this.$router.push('/classify')
      }
    },
  },
  mounted(){
    this.$store.dispatch('getData')
  }
}
</script>

<style>
*
{
  margin:0
}
.mvvm
{
  width:100%;
  height:92vh;
  /* background:pink; */
}
.nav
{
  width:100%;
  height:8vh;
}
</style>
