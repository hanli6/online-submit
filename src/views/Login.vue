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
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
 
<script>
    export default {
        props: [],
        watch: {},
        data(){
          return{
            formData: {
              username: '',
              password: ''
            },
            rules: {
              username: [
                {
                  required: true,
                  trigger: 'blur',
                  message:'请输入用户名'
                }
              ],
              password: [
                {
                  required: true,
                  trigger: 'blur',
                  message:'请输入密码'
                }
              ],
            }
          }
        },
        created() {},
        mounted() {},
        methods:{
        
        },
        components:{
         
        },
        beforeDestroy() {}
        
    }
</script>

<style lang='less' scoped>
.container{
  //background: deepskyblue; /* 整个页面背景色 */
  //height: 100vh; /* 高度填满整个视口 */
  //display: flex;
  //justify-content: center; /* 水平居中 */
  //align-items: center; /* 垂直居中 */
}
.loginForm{
  width: 400px;
  margin: 300px auto;
  //border: 1px solid red;
  //background-color: cadetblue;
  padding: 20px;
  .title{
    text-align: center;
    margin: 0 0 30px  0;
    font-size: 20px;
    color: black;
  }
  .el-button--primary{
    margin-right: 80px;
  }
}
</style>