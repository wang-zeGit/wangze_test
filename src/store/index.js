import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    storeArr:[], //存储数据
    showArr:[], //展示数组
    chaArr:[],  //搜索数组
    searchArr:[], 
  },
  mutations: {
    //获取数据
    getData(state){
      axios.get('http://localhost:8080/data1.json').then(data=>{
        // window.console.log(data.data.result)
        state.storeArr = data.data.result
        state.showArr = data.data.result
      }).catch(err=>window.console.log(err))
    },
    //查找数据
    alert(state,data){
      let tempArr = []
      state.storeArr.forEach(element=>{
        if(element.title.indexOf(data) != -1){
          // window.console.log(element)
          tempArr.push(element)
        }
      })
      state.showArr = tempArr
    },
    //排序
    priceSort(state,data){
      if(data){
        state.showArr.sort((a,b)=>{
          return a.price-b.price
        })
      }else{
        state.showArr.sort((a,b)=>{
          return b.price-a.price
        })
      }
    },
    // 本地存储
    onSearch(state,data){
      let tempArr = []
      state.storeArr.forEach(element=>{
        if(element.title.indexOf(data) != -1){
          tempArr.push(element)
        }
      })
      state.chaArr = tempArr
      window.console.log(state.chaArr)

      // state.searchArr = JSON.parse(localStorage.getItem('add'))
      // let temp = []
      // if(state.searchArr.length != 0){
      //   let index = state.searchArr.findIndex(element=>{
      //     return element == data
      //   })
      //   if(index != -1){
      //     state.searchArr[index].count+=1
      //   }else{
        state.searchArr.push(data)
      //   }
      // }else{
      //   state.searchArr.push(data)
      // }
      // temp = state.searchArr.slice()
      // localStorage.setItem('add',JSON.stringify(temp))
    }
  },
  actions: {
    getData(context){
      context.commit('getData')
    },
    alert(context,name){
      context.commit('alert',name)
    },
    priceSort(context,data){
      context.commit('priceSort',data)
    },
    cha(context,data){
      context.commit('onSearch',data)
    }
  },
  modules: {
  }
})
