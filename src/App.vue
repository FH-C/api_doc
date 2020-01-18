<template>
  <div id="app">
    <el-container style="width: 100%;height:100%">
      <list></list>
      <api></api>
      <Search></Search>
    </el-container>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Api from "./components/Api.vue";
import List from "./components/List.vue";

export default {
  name: "app",
  components: {
    Search,
    Api,
    List
  },
  data() {
    return {
      method: "POST",
      uri: "/api"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
