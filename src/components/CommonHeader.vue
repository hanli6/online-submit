<template>
  <div class="header-content">
    <div class="l-content">
      <el-button @click="handleMenu" icon="el-icon-menu"></el-button>
      <span class="text">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img src="../assets/images/20250103213434.jpg" alt="">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="center">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import jsCookie from "js-cookie";
import {userLogout} from "@/api";

export default {
  data() {
    return {}
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu');
    },
    handleCommand(command) {
      let res = {};
      userLogout().then(response => {
        res = response.data;
        if (res.code === 200) {
          this.$message({
            message:"成功退出！",
            type:'success'
          })
        }else {
          this.$message({
            message:"推出失败！",
            type:'error'
          })
        }
      })
      if (command === 'logout') {
        jsCookie.remove("menu")
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.header-content {
  padding: 0 20px;
  height: 60px;
  background-color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    font-size: 14px;
    color: #fff;
    margin-left: 10px;
  }

  .el-dropdown-link img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>