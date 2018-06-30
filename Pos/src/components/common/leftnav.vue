<template>
  <div class="left_nav">
    <ul>
      <li @click="cashier">
        <i class="icon iconfont icon-goumai" id="goodsCashier"></i>
        <div>收银</div>
      </li>
      <li @click="store">
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li id="goodsPos" @click="Pos">
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li @click="vip">
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>用户</div>
      </li >
      <li @click="statistical">
        <i class="icon iconfont icon-tongji" id="goodsStatistical"></i>
        <div>统计</div>
      </li>
      <!--<li @click="set">-->
        <!--<i class="icon iconfont icon-gongnengjianyi"></i>-->
        <!--<div>设置</div>-->
      <!--</li>-->
    </ul>
  </div>
</template>

<script>
    export default {
        name: "leftnav",
        data(){
            return{
              isActive:true
            }
        },
      methods:{
        Pos:function () {
            this.$router.push({ path: 'Pos' });
          },
        cashier:function () {
          this.$router.push({ path: 'cashier' });
        },
        set:function () {
          this.$router.push({ path: 'set' });
        },
        statistical:function () {
          this.$router.push({ path: 'statistical' });
        },
        store:function () {
          this.$router.push({ path: 'store' });
        },
        vip:function () {
          this.$router.push({ path: 'vip' });
        },
      }
    }
</script>

<style>
  .left_nav{
    color: #ffffff;
    font-size: 10px;
    height: 100%;
    background-color: #1d8ce0;
    float: left;
    width: 80px;
  }
  .iconfont{
    font-size: 24px;
  }
  .left_nav ul{
    padding: 0;
    margin: 0;
  }
  .left_nav ul li{
    list-style: none;
    text-align: center;
    border-bottom: 1px solid #20a0ff;
    padding: 10px;
  }
  .left_nav ul li:hover{
    cursor: pointer;
    color: #000;
  }
</style>
