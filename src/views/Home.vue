<template>
  <div class="home">
    <!-- 骨架屏 -->
    <skeleton v-if="list.length == 0"/>

    <div class="container" v-else>
      <app-header class="head"/>
      <section>
        <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh" class="section">
          <list :data="list"></list>
        </van-pull-refresh>
        <!-- 加载更多 -->
        <div class="loadMore" ref="loadMore"></div>
      </section>
      <app-footer class="foot"/>
    </div>
  </div>
</template>

<script>
// vant
import {Toast} from "vant"
// api
import apis from "../server/apis"
// 子组件
import appHeader from "../components/appHeader"
import appFooter from "../components/appFooter"
import list from "../components/list"
import skeleton from "../components/skeleton"
// 延迟函数
import delay from "../utils/delay"

export default {
  name: 'Home',
  components:{
    appHeader,
    appFooter,
    list,
    skeleton
  },
  data(){
      return{
          list:[],
          isLoading: false,
      }
  },
  methods:{
      // 获取新闻列表
      async getList(){
          // this.$refs.loadMore ? (this.$refs.loadMore.innerHTML = "正在加载中...") : null
          // this.$refs.loadMore.innerHTML = "正在加载中..."
          // await delay()
          this.list = await apis.getList()
          // this.list = Object.freeze([...this.list,...result])
          // this.$refs.loadMore ? (this.$refs.loadMore.innerHTML = "") : null
          // this.$refs.loadMore.innerHTML = ""
      },
      // 下拉刷新
      onRefresh() {
        setTimeout(() => {
          Toast('刷新成功');
          this.isLoading = false;
        }, 1000);
      },
  },
  created(){
    this.getList()
  },
  updated(){
    let obj = new IntersectionObserver(async(entries)=>{
      let item = entries[0]
      if(item.isIntersecting && this.list.length>0){
        item.target.innerHTML = "loading"
        await delay()
        let result = await apis.getList()
        this.list = Object.freeze([...this.list,...result])
        item.target.innerHTML = ""
      }
    },{
      threshold:[.5]
    })
    obj.observe(this.$refs.loadMore)
  }
  
}
</script>

<style scoped lang="less">
.home{
  width:100%;
  height:100%;
  .container{
    width:100%;
    height:100%;
    display:flex;
    flex-flow:column nowrap;
    section{
      width:100%;
      flex:1;
      overflow-y: scroll;
      .loadMore{
        width:100%;
        height:0.5rem;
        line-height:0.5rem;
        text-align:center;
      }
    }
  }
  
}
</style>
