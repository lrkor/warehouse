<template>
  <div>
    <leftNav></leftNav>
    <div class="statistical">
      <div class="selt">
        <el-select id="select" @change="currentSel" v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div>
        <div class="dingType">
          <schart class="pie" :canvasId="canvasId"
                  :type="type"
                  :width="width"
                  :height="height"
                  :data="data"
                  :options="options"
          ></schart>
        </div>
        <div class="goodsType">
          <schart class="bar" :canvasId="canvasId1"
                  :type="type1"
                  :width="width1"
                  :height="height1"
                  :data="data1"
                  :options="options1"
          ></schart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Schart from 'vue-schart';
  import  leftNav from '@/components/common/leftnav'
    export default {
        name: "statistical",
      components:{
        leftNav,
        Schart,
      },
      data(){
          return{
            canvasId: 'myCanvas',
            type: 'pie',
            width: 600,
            height: 500,
            data: [
              {name: '店铺订单', value: 356},
              {name: '外卖订单', value: 750},
            ],
            options: {
              autoWidth: true,
              bgColor: '#FFFFFF',            // 默认背景颜色
              title: '订单类型',// 图表标题
              titleColor: '#000000',         // 图表标题颜色
              titlePosition: 'top',     // 图表标题位置: top / bottom
              legendColor: '#000000',         // 图例文本颜色
              legendTop: 40,               // 图例距离顶部的长度
              colorList: ['#1E9FFF','#13CE66'],   // 环形图颜色列表
              radius: 120,                     // 环形图外圆半径
            },


            canvasId1: 'myCanvas1',
            type1: 'bar',
            width1: 200,
            height1: 800,
            data1: [
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
            options1: {
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


            options2: [{
              value: '选项1',
              label: '当天'
            }, {
              value: '选项2',
              label: '近三天'
            }, {
              value: '选项3',
              label: '近一周'
            }, {
              value: '选项4',
              label: '近一个月'
            }],
            value: '选项1'    //默认选中
          }
      },
      mounted:function () {
        document.getElementById('goodsStatistical').style.color = '#32ff7b';
      },
      methods:{
        currentSel:function () {
          console.log(this.value);
          if(this.value=='选项1'){
              this.data=[{name: '店铺订单', value: 356}, {name: '外卖订单', value: 750},];
              this.data1=[{name: '汉堡', value: 526}, {name: '可乐', value: 421}, {name: '鸡翅', value: 356}, {name: '薯条', value: 777}]
          }else if(this.value=='选项2'){
              this.data=[{name: '店铺订单', value: 400}, {name: '外卖订单', value: 789},];
              this.data1=[{name: '汉堡', value: 500}, {name: '可乐', value: 456}, {name: '鸡翅', value: 356},{name: '薯条', value: 777}]
          }else if(this.value=='选项3'){
              this.data=[{name: '店铺订单', value: 777}, {name: '外卖订单', value: 978},];
              this.data1=[{name: '汉堡', value: 999}, {name: '可乐', value: 333}, {name: '鸡翅', value: 356},{name: '薯条', value: 777}]
          }else if(this.value=='选项4'){
              this.data=[{name: '店铺订单', value: 452}, {name: '外卖订单', value: 888},];
              this.data1=[{name: '汉堡', value: 666}, {name: '可乐', value: 555}, {name: '鸡翅', value: 356},{name: '薯条', value: 777}]
          }
        }
      }
    }

</script>

<style scoped>
  .statistical{
    margin-left: 80px;
    overflow: hidden;
  }
  .pie{
    width: 500px;
    height: 400px;
  }
  .bar{
    width: 700px;
    height: 400px;
  }
  .dingType{
    float: left;
    margin-left: 20px;
    margin-top: 50px;
  }
  .goodsType{
    float: left;
    margin-left: 20px;
    margin-top: 50px;
  }
  .selt{
    margin-top: 10px;
    width: 255px;
  }
  .fl{
     float: left;
   }
</style>
