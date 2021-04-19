<template>
<div class="addNav">
    <header>
        <div @click="back"><</div>
        <div>频道管理</div>
    </header>
    <section>
        <p>点击删除以下频道</p> 
        <div class="del" >
            <div>推荐</div>
            <div v-for="(item,index) in delOptions" :key="index" @click="del(index)">
                {{ item }}
            </div>
        </div>
        <p>点击添加以下频道</p>
        <div class="add">
            <div v-for="(item,index) in addOptions" :key="index" @click="add(index)">
                {{ item }}
            </div>
        </div>
    </section>
</div>
</template>

<script>

export default {
    name:"addNav",
    data(){
        return{
            delOptions:["热点","社会","娱乐","科技","汽车","体育","财经","军事","国际","时尚"],
            addOptions:["游戏","旅游","历史","搜索","美食","育儿","养生","故事","美文"],
        }
    },
    methods:{
        // 回退到     
        back(){
            // history.back()
            this.$router.push({
                path:"/"
            })
        },
        // 删除
        del(index){
            let a = this.delOptions.splice(index,1)
            this.addOptions.push(a.join())
            console.log(this.delOptions);
        },
        // 添加
        add(index){
            let b = this.addOptions.splice(index,1)
            this.delOptions.push(b.join())
        }
    },
    mounted(){
        // console.log(this.delOptions)
        // this.$bus.$emit("send",this.delOptions)
        // console.log("mounted");
    },
}
</script>

<style lang="less" scoped>
.addNav{
    width:100%;
    height:100%;
    header{
        width:100%;
        height:0.5rem;
        background-color: #D43D3D;
        color:#fff;
        display:flex;
        align-items:center;
        div{
            width:calc(100% / 3);
        }
        div:first-of-type{
            margin-left:0.1rem;
        }
        div:last-of-type{
            text-align:center;
        }
    }
    section{
        width:100%;
        padding:0.1rem;
        p{
            font-size:0.16rem;
            color:#666;
        }
        .del,.add{
            padding:0.1rem 0;
            display:flex;
            flex-flow:row wrap;
            font-size:0.17rem;
            div{
                padding:0.1rem 0.22rem;
                margin-right:0.11rem;
                margin-bottom:0.1rem;
                border:1px solid #CCCCCC;
            }
        }
        .del div:first-of-type{
            background:#F0F0F0;
        }
    }
}
</style>