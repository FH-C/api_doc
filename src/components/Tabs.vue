<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="文档" name="doc"></el-tab-pane>
    <el-tab-pane label="测试" name="test"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'doc'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>