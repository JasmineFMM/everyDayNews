<template>
  <div class="appHeader">
    <div class="top">
        <div class="icon icon1">&#xe6eb;</div>
        <div>
            <span class="title">今日头条</span>
            <span class="icon">&#xe670;</span>
        </div>
        <div class="icon icon1">&#xe61a;</div>
    </div>
    <div class="bottom">
        <ul class="nav">
            <li>推荐</li>
            <li v-for="(item,index) in navs" :key="index">{{ item }}</li>
        </ul>
        <div class="icon iconAdd" @click="add">&#xe6c3;</div>
    </div>
  </div>
</template>

<script>
export default {
    name:"appHeader",
    data(){
        return {
            navs:["热点","社会","娱乐","科技","汽车","体育","财经","军事","国际","时尚"],
        }
    },
    methods:{
        add(){
            this.$router.push("/addNav")
        }
    },
    beforeMount(){
        // this.$bus.$on("send",(data)=>{
        //     this.navs = data
        // })
        // console.log(this.navs);
    }
}
</script>

<style lang="less" scoped>
    @font-face {
        font-family: 'iconfont';
        src: url('../assets/icon/iconfont.eot');
        src: url('../assets/icon/iconfont.eot?#iefix') format('embedded-opentype'),
            url('../assets/icon/iconfont.woff2') format('woff2'),
            url('../assets/icon/iconfont.woff') format('woff'),
            url('../assets/icon/iconfont.ttf') format('truetype'),
            url('../assets/icon/iconfont.svg#iconfont') format('svg');
    }
    .icon{
        font-family:'iconfont' ;
        font-size:0.2rem;
    }
    .appHeader{
        width:100%;
        font-size:0.2rem;
        .top{
            background-color: #D43D3D;
            color:#fff;
            padding:0.15rem 0.2rem;
            display:flex;
            justify-content: space-between;
            align-items: center;
            .title{
                font-family:"仿宋";
                font-weight:bold;
                margin-right:0.05rem;
                font-size:0.23rem;
            }
            .icon1{
                font-size:0.23rem;
            }
        }
        .bottom{
            width:100%;
            background-color: #F4F5F6;
            display:flex;
            justify-content: space-between;
            align-items: center;
            border-bottom:1px solid #DDDDDD;
            .nav{
                width:88%;
                display:flex;
                font-size:0.18rem;
                overflow-y:hidden;
                overflow-x: scroll;
                white-space: nowrap;
                border-right: 1px solid #ccc;
                li:first-of-type{
                    color:#F86969;
                }
                li{
                    padding:0.12rem 0.1rem;
                }
            }
            .nav::-webkit-scrollbar{
                display:none;
            }
            .iconAdd{
                width:12%;
                text-align:center;
                color:#F86969;
                font-weight:bolder;
            }
        }
    }
</style>