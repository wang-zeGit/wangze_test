<template>
    <div class="search">
        <div class="input">
            <van-search
                 v-model="value"
                show-action
                label="地址"
                    placeholder="请输入搜索关键词"
                @search="onSearch"
>
            <template #action>
            <div @click="onSearch">搜索</div>
        </template>
            </van-search>
        </div>
        <p class="li">历史记录</p>
        <div class="box">
            <template v-for="(item,index) in $store.state.searchArr">
                <div class="item" :key="index">{{item}}</div>
            </template>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            value:''
        }
    },
    methods:{
        onSearch(){
            this.$store.dispatch('cha',this.value)
        }
    }
}
</script>

<style scoped>
.search
{
    width:100%;
    height:100vh;
} 
.input
{
    width:100%;
    height:10%;
}
.box
{
    width:100%;
    height:20%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap
}
.item
{
    width:15%;
    display: flex;
    justify-content: center;
    align-items: center;
    height:30px;
    background:gainsboro;
}
</style>