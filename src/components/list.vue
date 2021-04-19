<template>
<div class="list">
    <div v-for="item in data" :key="item.group_id" class="every" @click="goDetail(item.group_id)">
        <div :class='item.has_image==false && item.image_url==false?"noImage":(item.image_url?"oneImage":"threeImage")'> 
            <div>
                <h1>{{item.title}}</h1>
                <!-- 3张 -->
                <div  class="imgsBox">
                    <img v-for="(i,index) in item.image_list" :key="index" src="../assets/load.gif" :data-src= i.url alt="" ref="lazyImg" >
                </div>
                <div>
                    <span :class="item.label?'top':''">{{item.label}}</span>
                    <span>{{item.media_name}}</span>
                    <span>评论 {{item.comment_count}}</span>
                    <span>{{item.datetime}}</span>
                </div>
            </div>
            <!-- 1张 -->
            <div class="imgBox" v-if="item.image_url">
                <img src="../assets/load.gif" :data-src= item.image_url  alt=""  class="oneImg" ref="lazyImg">
            </div>
        </div>
    </div>
</div>
</template>

<script>
// 引入接口
import apis from "../server/apis"

export default {
    name:"list",
    data(){
        return {
            allList:null,
            id:null
        }
    },
    props:{
        data:{
            type:Array,
            require:true,
            default:()=>[]
        }
    },
    methods:{
        // 获取新闻列表
        async getList(){
            this.allList = await apis.getList()
            // console.log(this.allList);
        },
        // 点击跳转到详情页
        goDetail(id){
            this.$router.push({
                name:"detail",
                params:{id:id}
            })
        },
        // 懒加载
        lazyload(){
            let imgs = this.$refs.lazyImg
            if(imgs.length == 0) return
            let ob = new IntersectionObserver( entries =>{
                entries.forEach( item =>{
                    // console.log(item);
                    if(item.isIntersecting){//进入可视区域
                        item.target.src = item.target.getAttribute("data-src")
                        // 图片显示后解除监听
                        ob.unobserve(item.target)
                    }
                })
            },{ 
                // 完全进入可视区域内才显示真实路径，否则显示loading图
                threshold:[1] 
            })
            // 页面获取到的所有img进行监听
            imgs.forEach( item =>{
                ob.observe(item)
            })
        }
    },
    beforeCreate(){
        // console.log("beforeCreate子");
    },
    created(){
        // console.log("created子");
    },
    beforeMount(){
        // console.log("beforeMount子");
    },
    mounted(){
        this.lazyload()
        
    },
    beforeUpdate(){
        // console.log("beforeUpdate子");
    },
    updated(){
        this.lazyload()
    }
}
</script>

<style lang="less" scoped>
    .list{
        .every{
            padding:0.1rem 0.1rem;
            border-bottom:1px solid #EBEBEB;
            h1{
                font-size:0.18rem;
                color:#000;
                margin-bottom:0.06rem;
                line-height:0.3rem;
            }
            span{
                font-size:0.14rem;
                color:#9999B3;
                margin-right:0.05rem;
            }
            .noImage{
                .top{
                    padding:0.02rem 0.05rem;
                    border:1px solid #F85959; 
                    color:#F85959;
                    border-radius:0.05rem;
                }
            }
            .oneImage{
                display:flex;
                justify-content: space-between;
                div:first-of-type{
                    padding-right:0.1rem;
                }
                span{
                    font-size:0.14rem;
                    color:#9999B3;
                    margin-right:0.05rem;
                }
                .oneImg{
                    width:1rem;
                }
            }
            .threeImage{
                .imgsBox{
                    width:100%;
                    display:flex;
                    justify-content: space-between;
                    margin-bottom:0.1rem;
                    img{
                        width:32%;
                    }
                }
            }
        }
    }
</style>