<template>
  <div class="appfooter">
      <div>
          <img src="../assets/logo.jpg" alt="">
          今日头条
      </div>
      <div class="btn">打开</div>
  </div>
</template>

<script>
export default {
    name:"appfooter"
}
</script>

<style lang="less" scoped>
    .appfooter{
        padding:0.1rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        font-size:0.17rem;
        img{
            vertical-align: middle;
        }
        .btn{
            width:0.75rem;
            height:0.3rem;
            line-height:0.3rem;
            background:linear-gradient(to right,#FF0808,#FF4D4D);
            color:#fff;
            border-radius:0.2rem;
            text-align: center;
            font-size:0.17rem;
        }
    }
</style>