<template>
<div class="skeleton">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>
</template>

<script>

export default {
    name:"skeleton",
}
</script>

<style lang="less" scoped>
    .skeleton{
        padding:0.3rem 0.2rem;
        div{
            margin-bottom:0.4rem;
        }
        div:nth-of-type(1){
            width:55%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(2){
            width:55%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(3){
            width:55%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(4){
            width:70%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(5){
            width:70%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(6){
            width:70%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(7){
            width:90%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(8){
            width:90%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(9){
            width:70%;
            height:0.2rem;
            background-color: #ccc;
        }
        div:nth-of-type(10){
            width:70%;
            height:0.2rem;
            background-color: #ccc;
        }
    }
</style>