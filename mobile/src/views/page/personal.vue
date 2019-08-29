<template>
    <div class="personal">
        <div class="title">
            <div class="title_left">
                <img src="../../assets/img/pages/tou.png" alt="">
            </div>
            <div class="title_right">
                <div class="name">lrkor</div>
            </div>
        </div>
        <div class="menu_list">
            <div class="menu_item">
                <div class="item_left">
                    <van-icon name="more" />
                    <span>我的地址</span>
                </div>
                <div class="item_right">
                    <van-icon name="arrow"/>
                </div>
            </div>
            <div class="menu_item">
                <div class="item_left">
                    <van-icon name="service" />
                    <span>我的客服</span>
                </div>
                <div class="item_right">
                    <van-icon name="arrow"/>
                </div>
            </div>
            <div class="menu_item">
                <div class="item_left">
                    <van-icon name="shop" />
                    <span>商务合作</span>
                </div>
                <div class="item_right">
                    <van-icon name="arrow"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "personal"
    }
</script>

<style scoped>
    .personal{
        height: 100%;
        overflow: hidden;
    }
    .title {
        display: flex;
        padding: 0 15px;
        margin-top: 15px;
        border-bottom: 1px solid #eeeeee;
    }

    .title_left {

    }

    .title_left img {
        width: 3rem;
        height: 3rem;
    }

    .title_right {
        margin-left: 15px;
    }
    .menu_list{
        padding: 0 15px;
        margin-top: 15px;
    }
    .menu_item{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eeeeee;
        padding: 10px 0;
    }
    .item_left{
        display: flex;
        align-items: center;
    }
    .item_left .van-icon{
        color: #409EFF;
    }
    .item_left span{
        font-size: 16px;
        color: #333333;
        margin-left: 15px;
    }
    .item_right{
        display: flex;
        align-items: center;
        color: #999;
    }
</style>