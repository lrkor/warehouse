<template>
  <div class="list_table">
    <el-table
      :data="list"
      border
      style="width: 100%">
      <el-table-column v-for="(item,index) in headerList" :key="index"
                       :prop="item.prop"
                       :label="item.label"
                       :width="item.width">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button v-if="del" type="danger" @click="childShowDel(scope.row)" size="mini">删除</el-button>
          <el-button v-if="editor" type="primary" @click="childEditor(scope.row)" size="mini">编辑</el-button>
          <el-button v-if="detail" type="success" @click="childDetail(scope.row)" size="mini">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
        props: ['list', 'headerList', 'del', 'editor', 'detail'],
        name: "listTable",
        data() {
            return {}
        },
        methods: {
            childEditor(row) {
                this.$emit('editor', row);
            },
            childShowDel(row) {
                this.$emit('showDel', row);
            },
            childDetail(row) {
                this.$emit('showDetail', row);
            }
        }
    }
</script>

<style scoped>
  .list_table {
    padding: 15px;
  }
</style>
