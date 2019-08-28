<template>
    <div class="index">
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="menu">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="cart-o">外卖</van-tabbar-item>
                <van-tabbar-item icon="orders-o">订单</van-tabbar-item>
                <van-tabbar-item icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                active: 0
            }
        },
        mounted() {
            console.log(document.body.clientHeight);
            let height = document.body.clientHeight;
            console.log(document.getElementsByClassName('main').style.height);
            document.getElementsByClassName('main').style.height = (height-50) + 'px';
        }
    }
</script>

<style scoped>

</style>