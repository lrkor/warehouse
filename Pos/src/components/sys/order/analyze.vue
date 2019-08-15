<template>
  <div class="analyze">
    <div class="search">
      <el-select v-model="value" placeholder="请选择" @change="search">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="statistical">
      <div class="order_type">
        <schart class="pie" canvasId="typeMyCanvas"
                type="pie"
                width="600"
                height="500"
                :data="typeArr"
                :options="typeOptions"
        ></schart>
      </div>
      <div class="goods">
        <schart class="bar" canvasId="speciesMyCanvas"
                type="bar"
                width="200"
                height="800"
                :data="speciesArr"
                :options="speciesOptions"
        ></schart>
      </div>
    </div>
  </div>

</template>

<script>
    import Schart from 'vue-schart';
    import url from '@/serviceAPI.config.js'
    import {get, post} from '@/request.js'

    export default {
        name: "analyze",
        components: {Schart},
        data() {
            return {
                options: [
                    {
                        value: '0',
                        label: '全部'
                    }, {
                        value: '1',
                        label: '当天'
                    }, {
                        value: '2',
                        label: '近7天'
                    }, {
                        value: '3',
                        label: '近一个月'
                    }],
                value: '0',    //默认选中
                typeArr: [
                    {name: '店铺订单', value: 0},
                    {name: '外卖订单', value: 0},
                ],
                typeOptions: {
                    autoWidth: true,
                    bgColor: '#FFFFFF',            // 默认背景颜色
                    title: '订单类型',// 图表标题
                    titleColor: '#000000',         // 图表标题颜色
                    titlePosition: 'top',     // 图表标题位置: top / bottom
                    legendColor: '#000000',         // 图例文本颜色
                    legendTop: 40,               // 图例距离顶部的长度
                    colorList: ['#1E9FFF', '#13CE66'],   // 环形图颜色列表
                    radius: 120,                     // 环形图外圆半径
                },
                speciesArr: [
                    {name: '汉堡', value: 526},
                    {name: '可乐', value: 421},
                    {name: '鸡翅', value: 356},
                    {name: '薯条', value: 777},
                    {name: '薯条', value: 562},
                    {name: '薯条', value: 777},
                    {name: '薯条', value: 777},
                    {name: '薯条', value: 777},
                    {name: '汉堡', value: 526},
                ],
                speciesOptions: {
                    padding: 40,                   // canvas 内边距
                    bgColor: '#FFFFFF',            // 默认背景颜色
                    title: '商品类型',              // 图表标题
                    autoWidth: true,               // 设置宽高自适应
                    titleColor: '#000000',         // 图表标题颜色
                    titlePosition: 'top',          // 图表标题位置: top / bottom
                    yEqual: 7,                     // y轴分成5等分
                    fillColor: '#1E9FFF',          // 默认填充颜色
                    contentColor: '#eeeeee',       // 内容横线颜色
                    axisColor: '#666666',          // 坐标轴颜色
                },
            }
        },
        created() {
            this.queryType(0);
            this.queryGoodType(0);
        },
        methods: {
            //按订单类型查询订单
            async queryType(type) {
                let res = await get(url.order.queryType, {type});
                this.typeArr = res.data;
            },

            //按订单类型查询订单
            async queryGoodType(type) {
                let res = await get(url.order.queryGoodType, {type});
                this.speciesArr = res.data;
            },

            search(val) {
                this.queryType(val);
                this.queryGoodType(val);
            },
        }
    }
</script>

<style scoped>
  .analyze {
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
  }

  .statistical {
    display: flex;
  }

  .search {
    margin-bottom: 20px;
  }

  .pie {
    width: 500px;
    height: 400px;
  }

  .bar {
    width: 700px;
    height: 400px;
  }
</style>
