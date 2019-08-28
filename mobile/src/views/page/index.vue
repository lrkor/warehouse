<template>
    <div class="index">
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="menu">
            <van-tabbar v-model="active" route>
                <van-tabbar-item
                        replace
                        to="/index/shopping"
                        icon="cart-o"
                >
                    外卖
                </van-tabbar-item>
                <van-tabbar-item
                        replace
                        to="/index/order"
                        icon="orders-o"
                >
                    订单
                </van-tabbar-item>
                <van-tabbar-item
                        replace
                        to="/index/personal"
                        icon="user-o"
                >
                    我的
                </van-tabbar-item>
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
            let height = document.body.clientHeight;
            document.getElementsByClassName('main')[0].style.height = (height-50) + 'px';
        }
    }
</script>

<style scoped>

</style>