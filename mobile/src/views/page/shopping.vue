<template>
    <div class="shopping">
        <div class="title">
           <i>Welcome to Hamburg</i>
        </div>
        <div class="goods">
            <div class="tabs">
                <van-sidebar v-model="activeKey">
                    <van-sidebar-item title="常用" />
                    <van-sidebar-item title="汉堡" />
                    <van-sidebar-item title="饮料" />
                    <van-sidebar-item title="小食" />
                    <van-sidebar-item title="套餐" />
                </van-sidebar>
            </div>
            <div class="goods_list">
                <div class="goods_item" v-for="(item,index) in [0,1,2,3,4,5,6,9,5,8]" :key="index">
                    <div class="item_left"><img src="../../assets/img/st.jpg" alt=""></div>
                    <div class="item_right">
                        <div class="item_right_top">汉堡</div>
                        <div class="item_right_down">
                            <div class="item_right_down_left">15￥</div>
                            <div class="item_right_down_right">
                                <van-stepper v-model="value" min="0"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "shopping",
        data() {
            return {
                activeKey: 0,
                value: 0
            };
        },
        created() {

        },
        mounted() {
            // let height = document.body.clientHeight;
            // document.getElementsByClassName('main')[0].style.height = (height-50) + 'px';
            console.log(document.getElementsByClassName('shopping')[0].offsetHeight );
            console.log(document.getElementsByClassName('title')[0].offsetHeight);
            let shoppingHeight = document.getElementsByClassName('shopping')[0].offsetHeight;
            let titleHeight = document.getElementsByClassName('title')[0].offsetHeight;
            document.getElementsByClassName('goods_list')[0].style.height = (shoppingHeight-titleHeight) + 'px';

        }

    }
</script>

<style scoped>
    .shopping{
        height: 100%;
    }
    .title{
        background-color: #409EFF;
        font-size: 1.5rem;
        color: #ffffff;
        text-align: center;
        padding: 15px 0;
    }
    .goods{
        display: flex;
    }
    .goods_list{
        flex: 1;
        overflow-y: scroll;
    }
    .goods_item{
        display: flex;
        padding: 15px;
    }
    .item_right{
        display: flex;
        flex-flow: column;
        flex: 1;
        height: 4rem;
        padding: 4px 0 4px 15px;
        box-sizing: border-box;
    }
    .item_right_down{
        align-self: flex-end;
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
    }
    .item_right_down_left{
        color: #ff0000;
    }
    .item_left img{
        width: 4rem;
        height: 4rem;
    }
    .van-sidebar-item--select{
        border-color: #409EFF;
    }
</style>