<template>
    <div class="shopping">
        <div class="title">
            <i>Welcome to Hamburg</i>
        </div>
        <div class="goods">
            <div class="tabs">
                <van-sidebar v-model="activeKey">
                    <!--                    <van-sidebar-item title="热卖" />-->
                    <van-sidebar-item title="汉堡"/>
                    <van-sidebar-item title="饮料"/>
                    <van-sidebar-item title="小食"/>
                    <van-sidebar-item title="套餐"/>
                </van-sidebar>
            </div>
            <!--            <goodList :list="oftenGoods" v-show="this.activeKey===0"></goodList>-->
            <goodList @plusAdd="plusAdd" @reduce="reduce" :list="type0Goods" v-show="this.activeKey===0"></goodList>
            <goodList @plusAdd="plusAdd" @reduce="reduce" :list="type1Goods" v-show="this.activeKey===1"></goodList>
            <goodList @plusAdd="plusAdd" @reduce="reduce" :list="type2Goods" v-show="this.activeKey===2"></goodList>
            <goodList @plusAdd="plusAdd" @reduce="reduce" :list="type3Goods" v-show="this.activeKey===3"></goodList>
        </div>
        <div class="btn">
            <van-submit-bar
                    :price="money"
                    button-text="结账"
                    @submit="onSubmit"
            >
                <div class="total">总数： <span class="num">{{total}}</span>个</div>
            </van-submit-bar>
        </div>
    </div>
</template>

<script>
    import goodList from '@/components/goodList'
    import url from '@/api/serviceAPI.config.js'
    import {post} from '@/server/request.js'
    import {getNewTime} from '@/utils/time.js'
    // import store from '@/vuex/store';
    // import {mapState} from 'vuex';

    export default {
        components: {goodList},
        name: "shopping",
        // store,
        data() {
            return {
                activeKey: 0,
                value: 0,
                total: 0,
                money: 0,
                // oftenGoods:[],
                type0Goods: [],
                type1Goods: [],
                type2Goods: [],
                type3Goods: [],
                userInfo:{}
            };
        },
        // computed:{
        //     ...mapState(['userInfo'])
        // },
        created() {
            //获取常用商品
            // this.getOftenGoods();
            this.userInfo =JSON.parse(localStorage.getItem('userInfo'));
            //获取商品菜单内容
            this.getMenuQuery();
        },
        mounted() {
            let height = document.body.clientHeight;
            let titleHeight = document.getElementsByClassName('title')[0].offsetHeight;
            document.getElementsByClassName('goods')[0].style.height = (height - titleHeight - 50) + 'px';
        },
        methods: {
            //获取常用商品
            // async getOftenGoods() {
            //     let res = await post(url.goods.oftenQuery);
            //     this.oftenGoods = res.data;
            //     this.oftenGoods.filter(item=>{
            //         item.value = 0;
            //     });
            // },

            //获取商品菜单内容
            async getMenuQuery() {
                for (let i = 0; i < 4; i++) {
                    let res = await post(url.goods.menuQuery, {type: i});
                    res.data.filter(item => {
                        item.count = 0;
                    });
                    if (i === 0) {
                        this.type0Goods = res.data;
                    } else if (i === 1) {
                        this.type1Goods = res.data;
                    } else if (i === 2) {
                        this.type2Goods = res.data;
                    } else if (i === 3) {
                        this.type3Goods = res.data;
                    }
                }
            },

            //添加总数
            plusAdd(price) {
                this.total++;
                this.money += price * 100;
            },

            //减少总数
            reduce(price) {
                this.total--;
                this.money -= price * 100;
            },

            //提交订单
            onSubmit() {
                let arr = [...this.type0Goods, ...this.type1Goods, ...this.type2Goods, ...this.type3Goods];
                arr = arr.filter(item => {
                    return item.count > 0;
                });
                if (this.total === 0) {
                    this.$toast('请选择商品');
                    return
                }
                let data = {
                    type: '1',
                    userId:this.userInfo.id,
                    time: getNewTime(),
                    money: this.money / 100,
                    total: this.total,
                    goodsData: arr
                };
                this.addOrder(data).then(res => {
                    if (res.code === '200') {
                        this.total = 0;
                        this.money = 0;
                        this.type0Goods.filter(item => {
                            item.count = 0;
                        });
                        this.type1Goods.filter(item => {
                            item.count = 0;
                        });
                        this.type2Goods.filter(item => {
                            item.count = 0;
                        });
                        this.type3Goods.filter(item => {
                            item.count = 0;
                        });
                        this.$toast('结账成功');
                    }
                });
            },
            //新增订单
            async addOrder(data) {
                let res = await post(url.order.add, {data});
                return res;
            },
        }
    }
</script>

<style scoped>
    .shopping {
        height: 100%;
        position: relative;
    }

    .btn {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }

    .title {
        background-color: #409EFF;
        font-size: 1.5rem;
        color: #ffffff;
        text-align: center;
        padding: 15px 0;
    }

    .goods {
        display: flex;
    }

    .total {
        font-size: 14px;
        color: #323233;
        margin-left: 15px;
    }

    .num {
        color: #f44;
        font-size: 18px;
        margin-right: 10px;
    }

    .van-sidebar-item--select {
        border-color: #409EFF;
    }

    .van-submit-bar {
        position: static;
    }
</style>