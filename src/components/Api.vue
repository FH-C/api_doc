<template>
  <el-main>
    <tabs></tabs>
    <el-button :plain="true" @click="copy('method')" id="method" type="success">{{ api.method }}</el-button>
    <el-button :plain="true" @click="copy('uri')" id="uri">{{ api.uri }}</el-button>
    <h3>请求参数</h3>
    <el-table :data="api.requestData" style="width: 70%">
      <el-table-column prop="pram_name" label="参数名" width="350">
        <template scope="scope">
          <el-button type="text" @click="copyText(scope.row)">{{ scope.row.pram_name }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="pram_type" label="参数类型" width="250"></el-table-column>
      <el-table-column prop="pram_description" label="描述"></el-table-column>
    </el-table>
    <h3>响应参数</h3>
    <el-table :data="api.responseData" style="width: 70%">
      <el-table-column prop="pram_name" label="参数名" width="350">
        <template scope="scope">
          <el-button type="text" @click="copyText(scope.row)">{{ scope.row.pram_name }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="pram_type" label="参数类型" width="250"></el-table-column>
      <el-table-column prop="pram_description" label="描述"></el-table-column>
    </el-table>
  </el-main>
</template>

<script>
import Tabs from "./Tabs";

export default {
  components: {
    Tabs
  },
  data() {
    return {
      api: {
        method: "POST",
        uri: "/api/createShareLink",
        requestData: [
          {
            pram_name: "pid",
            pram_type: "string",
            pram_description: "项目ID"
          },
          {
            pram_name: "password",
            pram_type: "string",
            pram_description: "访问密码，不需要密码就不要传递这个参数"
          },
          {
            pram_name: "expireAt",
            pram_type: "int",
            pram_description: "超时时间，时间戳，不设置时间时不传递这个参数"
          }
        ],
        responseData: [
          {
            pram_name: "_id",
            pram_type: "string",
            pram_description:
              "分享ID，要自己拼接成一个完整的网址，例如：http://yishigaofei.com:9981/#/s/6598656565"
          }
        ]
      },
      res: ""
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log("123", to.params);
    this.getApi(to.params.id);
    console.log("123", to.params);
    next();
  },
  created() {
    const api_id = this.$route.params.id;
    this.getApi(api_id);
  },
  methods: {
    copy(id) {
      let Url2 = document.getElementById(id).innerText;
      let oInput = document.createElement("input");
      oInput.value = Url2;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.remove();
      this.$message({
        message: "复制成功",
        type: "success"
      });
    },
    copyText(row) {
      let Url2 = row.pram_name; //每一行的某个值，如选中的当前行的url
      let oInput = document.createElement("input"); //创建一个隐藏input（重要！）
      oInput.value = Url2; //赋值
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      this.$message({
        message: "复制成功",
        type: "success"
      });
    },
    getApi(id) {
      this.$axios.get("http://localhost:8080/a.json").then(res => {
        this.api = res.data.apis[id];
      });
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to.params.id);
      this.getApi(to.params.id);
    }
  }
}
</script>

<style scoped>
h3 {
  color: #909399;
}
</style>
