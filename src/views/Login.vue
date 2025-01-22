<template>
  <div class="container">
    <div class="loginForm">
      <h3 class="title">登录 - 期刊管理系统</h3>
      <el-form :model="formData" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onsubmit()">登录</el-button>
          <el-button @click="toRegisterPage()">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {userLogin} from "@/api";

export default {
  props: [],
  watch: {},
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            trigger: 'blur',
            message: '请输入密码'
          }
        ],
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    async onsubmit() {
      let res;
      //校验参数
      if (this.formData.username === '' || this.formData.password === '') {
        this.$message('用户名或密码不合法')
        return;
      }

      //发起网络请求
      await userLogin(this.formData)
          .then(function (response) {
            res = response.data;
            //处理返回结果
            if (res.code === 200) {
              //将菜单树存储在Store中
              this.$store.commit('setMenu',res.data.menuVoList)
              //添加动态路由
              this.$store.commit('addMenu',this.$router)
              //添加token
              this.$store.commit('setUserId',res.data.token)
              this.$router.push('/home');
              this.$message('登录成功');
            } else {
              this.$message(res.message);
            }
          }.bind(this))
          .catch(function (error) {
            console.log(error);
          }.bind(this));
    },
    toRegisterPage() {
      this.$router.push('/register');
    }
  },
  components: {},
  beforeDestroy() {
  }

}
</script>

<style lang='less' scoped>
@import url('../less/global.less');
</style>