<template>
    <div class="order">
        <div class="title"><i>历史订单</i></div>
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <div class="order_item"
                    v-for="item in list"
                    :key="item"
            >
                <div class="item_left">
                    <img src="../../assets/img/pages/order_title.png" alt="">
                </div>
                <div class="item_right">
                    <div class="name">自家店 <van-icon name="arrow" /></div>
                    <div class="information">
                        <div class="time">2019-08-15 17:15:15</div>
                        <div class="information_right">￥60</div>
                    </div>
                    <div class="evaluation">
                        <van-button type="primary" round color="#409EFF" size="mini">评价</van-button>
                    </div>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                error: false,
            };
        },
        methods:{
            onLoad() {
                // 异步更新数据
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    // 加载状态结束
                    this.loading = false;

                    // 数据全部加载完成
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        },
        mounted() {
            let orderHeight = document.getElementsByClassName('order')[0].offsetHeight;
            let titleHeight = document.getElementsByClassName('title')[0].offsetHeight;
            document.getElementsByClassName('van-list')[0].style.height = (orderHeight-titleHeight) + 'px';
        }
    }
</script>

<style scoped>
    .order{
        height: 100%;
    }
    .title{
        font-size: 18px;
        padding: 10px 15px;
        font-weight: bold;
        border-bottom: 1px solid #eeeeee;
    }
    .order_item{
        display: flex;
        background-color: #fff;
        /*margin-top: 10px;*/
        padding: 10px 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
    }
    .item_left{
        display: flex;
        align-items: center;
    }
    .item_left img{
        width: 3rem;
        height: 3rem;
        border-radius: 5px;
    }
    .item_right{
        height: 4rem;
        flex: 1;
        display: flex;
        flex-flow: column;
        padding-left: 15px;
    }
    .name{
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    .time{
        color: #999999;
        font-size: 12px;
    }
    .information{
        color: #333333;
        font-size: 16px;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }
    .evaluation{
        text-align: right;
    }
    .van-list{
        overflow-y: scroll;
        box-sizing: border-box;
    }
    .van-icon-arrow{
        margin-left: 15px;
    }
</style>