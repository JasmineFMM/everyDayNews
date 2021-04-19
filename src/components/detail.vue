<template>
<div class="detail">
    <header>
        <div>
          <img src="../assets/logo.jpg" alt="">
          今日头条
        </div>
        <div class="btn">打开</div>
    </header>
    <section>
        <h1>{{ detail[0].title }}</h1>
        <div class="source">
            <div class="msg">
                <div>
                    <img :src= detail[0].media_info.avatar_url alt="">
                </div>
                <div>
                    <h3>{{ detail[0].media_name}}</h3>
                    <span>{{ detail[0].datetime}}</span>
                </div>
            </div>
            <div class="see">关注</div>
        </div>
        <p>
            {{ detail[0].abstract }}
        </p>
        <!-- <div :class="detail[0].image_url?'oneImage':''"> -->
            <!-- <img :src= image_url alt=""> -->
            <!-- <div v-for="(i,index) in  image_list" :key="index">
                <img :src = i.url alt="">
            </div> -->
        <!-- </div> -->
    </section>
</div>
</template>

<script>
// 引入接口
import apis from "../server/apis"

export default {
    name:"detail",
    data(){
        return{
            id:parseInt(this.$route.params.id),
            detail:[]
        }
    },
    methods:{
        // 获取新闻详情
        async getDetail(){
            this.detail = await apis.getDetail(this.id)
            console.log(this.detail[0]);
        }
    },
    mounted(){
        this.getDetail()
    }
}
</script>

<style lang="less" scoped>
.detail{
    width:100%;
    height:100%;
    font-size:0.17rem;
    header{
        padding:0.1rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        img{
            vertical-align: middle;
        }
        .btn{
            padding:0.08rem 0.15rem;
            background:#FF0808;
            color:#fff;
            font-size:0.17rem;
        }
    }
    section{
        padding:0.3rem 0.1rem;
        h1{
            font-size:0.24rem;
            font-weight:bolder;
            line-height:0.4rem;
        }
        .source{
            padding:0.2rem 0;
            display:flex;
            justify-content: space-between;
            align-items: center;
            font-size:0.16rem;
            .msg{
                display:flex;
                align-items:center;
                img{
                    width:0.5rem;
                    margin-right:0.1rem;
                }
                h3{
                    margin-bottom:0.1rem;
                }
                span{
                    color:#999999;
                }
            }
            .see{
                padding:0.06rem 0.15rem;
                border:1px solid #cfcecd;
            }
        }
        p{
            text-indent:2em;
            line-height: 0.4rem;
        }
        
    }
}
</style>