<template>
  <div class="home">
    <div class="logo">lativ诚衣</div>
    <div class="top_input">
      <van-search v-model="value" @click="inputClick" placeholder="请输入搜索关键词" />
    </div>
    <div class="sort_box">
      <div class="sort_box_box">
        <div @click="click('女')">女装</div>
        <div @click="click('童')">童装</div>
        <div @click="click('男')">男装</div>
        <div @click="click('婴')">婴儿</div>
        <div @click="click('运')">运动</div>
        <div @click="click('限')">限时</div>
      </div>
      <div class="sort_box_price">
        <div>综合</div>
        <div>销量</div>
        <div>新品</div>
        <div @click="priceClick">价格</div>
      </div>
    </div>
    <div class="suject">
      <template v-for="(item,index) in $store.state.showArr">
        <div class="suject_box" :key="index">
          <div class="suject_box_img">
            <img :src="item.pic" alt="">
          </div>
          <div class="suject_box_name">
            {{item.title}}
          </div>
          <div class="suject_box_box">
            <div>{{item.price}}</div>
            <button @click="onclick">购物车</button>
          </div>
        </div>
      </template>
    </div>
    <div class="loading" v-show="showLoad"><van-loading size="45px" vertical>加载中...</van-loading></div>
    <!-- <div class="van_sku">
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota-used="quotaUsed"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
    />
    </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      showLoad:false,
      value:'',
      // show:true,
      zhi:false
    }
  },
  methods:{
    click(name){
      this.$store.dispatch('alert',name)
    },
    onclick(){
      this.showLoad = true;
      setTimeout(()=>{
        this.showLoad = false;
      },1500)
    },
    priceClick(){
    this.zhi = !this.zhi
    if(this.zhi){
      this.$store.dispatch('priceSort',true)
    }else{
      this.$store.dispatch('priceSort',false)
    }
  },
  inputClick(){
    this.$router.push('/Search')
  }
  },
  // onBuyClicked(){

  // },
  // onAddCartClicked(){
    
  // },
  
}
</script>

<style>
.van_sku
{
  width:100%;
  height:80vh;
  background:blue;
  position: relative;
  z-index: 100;
  bottom:80%;
}
.loading
{
  width:20%;
  height:10%;
  position: relative;
  /* background:red; */
  z-index: 1000;
  margin-left:40%;
  margin-top:-95%;
}
.home
{
  width:100%;
  height:100%;
}
.logo
{
  width:100%;
  height:6%;
  /* background:blue; */
  display: flex;
  align-items: center;
}
.top_input
{
  width:100%;
  height:9%;
  /* background:orange; */
}
.sort_box
{
  width:100%;
  height:12%;
  /* background:orange */
}
.sort_box_box
{
  width:100%;
  height:50%;
  /* background:blue; */
  display: flex;
}
.sort_box_box div
{
  width:17%;
  height:100%;
  /* background:red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.sort_box_price
{
  width:100%;
  height:50%;
  /* background:salmon; */
  display: flex
}
.sort_box_price div
{
  width:17%;
  height:100%;
  /* background:red; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.suject
{
  width:100%;
  height:73%;
  /* background:red; */
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap
}
.suject_box
{
  width:47%;
  height:190px;
  /* background:blue; */
  margin-top:1%;
}
.suject_box_img
{
  width:100%;
  height:75%;
  /* background: palegoldenrod; */
}
.suject_box_img img
{
  width:100%;
  height:100%;
}
.suject_box_name
{
  width:100%;
  height:12%;
  /* background:palegoldenrod; */
  font-size: 13px;
  white-space: nowrap;
     overflow: hidden;
     text-overflow:ellipsis
}
.suject_box_box
{
  width:100%;
  height:13%;
  /* background:red; */
  display: flex;
  justify-content: space-between
}
.suject_box_box div
{
  color:red;
}
</style>