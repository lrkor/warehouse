<template>
    <div class="order">
        <div class="title"><i>历史订单</i></div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <van-list
                    v-model="loading"
                    :finished="finished"
                    finished-text="没有更多了"
                    :immediate-check="false"
                    :offset="20"
                    @load="onLoad"
            >
                <div class="order_item"
                     v-for="(item,index) in list"
                     :key="index"
                >
                    <div class="item_left">
                        <img src="../../assets/img/pages/order_title.png" alt="">
                    </div>
                    <div class="item_right">
                        <div class="name">自家店 <van-icon name="arrow" /></div>
                        <div class="information">
                            <div class="time">{{item.time}}</div>
                            <div class="information_right">{{item.money}}￥</div>
                        </div>
                        <div class="evaluation">
                            <van-button type="primary" round color="#409EFF" size="mini">评价</van-button>
                        </div>
                    </div>
                </div>
            </van-list>
        </van-pull-refresh>

    </div>
</template>

<script>
    import url from '@/api/serviceAPI.config.js'
    import {post} from '@/server/request.js'
    export default {
        name: "order",
        data() {
            return {
                list: [],
                loading: false,
                finished: false,
                error: false,
                isLoading: false,
                page:1,
                userInfo:{}
            };
        },
        created() {
            this.userInfo =JSON.parse(localStorage.getItem('userInfo'));
            let userId = this.userInfo.id;
            this.query(userId).then(res=>{

            });
        },
        methods:{
            onLoad() {
                let userId = this.userInfo.id;
                if (this.page !== 1) {
                    this.query(userId);
                }
            },

            //下拉刷新
            onRefresh() {
                let userId = this.userInfo.id;
                this.page = 1;
                this.query(userId).then(res=>{
                    if (res.code==='200'){
                        this.list = res.data;
                        this.$toast('刷新成功');
                        this.isLoading = false;
                    }
                });
            },
            //获取列表
            async query(userId){
                let res = await post(url.order.query, {page: this.page, size: 10,userId:userId});
                if(res.code==='200'){
                    this.list = [...this.list,...res.data];
                    if(res.data.length<res.total&&res.data.length===10){
                        this.page++;
                        this.loading = false;
                    }else {
                        this.loading = false;
                        this.finished = true;
                    }
                }
                return res;
            },
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