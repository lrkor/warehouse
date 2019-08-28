<template>
    <div class="order">
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
        }
    }
</script>

<style scoped>
    .order{
        height: 100%;
        background-color: #f1f1f1   ;
    }
    .order_item{
        display: flex;
        background-color: #fff;
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
    }
    .information_left{
        width: 10rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .van-list{
        height: 100%;
        overflow-y: scroll;
        box-sizing: border-box;
    }
    .van-icon-arrow{
        margin-left: 15px;
    }
</style>