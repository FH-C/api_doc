<template>
  <el-aside width="25%">
    <el-row class="tac">
      <el-col :span="12">
        <h5 align="middle">harddoc</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          text-color="#5c6975"
          active-text-color="#ffd04b"
          unique-opened="true"
          align="middle"
        >
          <el-submenu v-for="(api, index) in unique" :index="api" :key="index">
            <template slot="title">
              <span>{{api}}</span>
            </template>
            <el-menu-item v-for="(api2, index) in classApi(api)" :index="api2.title" :key="index">
              <router-link :to="{ name: 'api', params: { id: api2.id }}">
                <span>{{api2.title}}</span>
              </router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {
      apis: [],
      classList: []
    };
  },
  mounted() {
    this.getApis();
  },
  computed: {
    unique() {
      let classList = [];
      this.apis.forEach(function(api) {
        if (classList.indexOf(api.class) === -1) {
          classList.push(api.class);
        }
      });
      return classList;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    getApis() {
      this.$axios.get("http://127.0.0.1:8080/a.json").then(res => {
        this.apis = res.data.apis;
      });
    },
    classApi(class2) {
      return this.apis.filter(function(api) {
        return api.class === class2;
      });
    }
  }
};
</script>

<style scoped>
h5 {
  font-family: Helvetica;
  size: 200px;
  color: #484848;
}
a {
  text-decoration: none;
}
a:visited {
  color: #5c6975;
}
search {
  margin-left: 20px;
}
</style>