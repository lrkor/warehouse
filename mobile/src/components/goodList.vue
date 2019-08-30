<template>
    <div class="goods_list">
        <div class="goods_item" v-for="(item,index) in list" :key="index">
            <div class="item_left"><img :src="item.imgUrl" alt="暂无"></div>
            <div class="item_right">
                <div class="item_right_top">{{item.name}}</div>
                <div class="item_right_down">
                    <div class="item_right_down_left">{{item.price}}￥</div>
                    <div class="item_right_down_right">
                        <van-stepper v-model="item.count" min="0" @plus="plus(item.price)" @minus="minus(item.price)"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['list','plusAdd','reduce'],
        name: "goodList",
        data(){
            return{

            }
        },
        methods:{
            plus(item){
                this.$emit('plusAdd',item)
            },
            minus(item){
                this.$emit('reduce',item)
            }
        }
    }
</script>

<style scoped>
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
</style>