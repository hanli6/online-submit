<template>
  <div class="container">
    <div class="loginForm">
      <h3 class="title">注册 - 期刊管理系统</h3>
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <el-form-item label="昵称" prop="nickname" :error="fieldErrors.nickname">
          <el-input v-model="formData.nickname"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username" :error="fieldErrors.username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :error="fieldErrors.password">
          <el-input type="password" v-model="formData.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="requirePassword" :error="fieldErrors.requirePassword">
          <el-input type="password" v-model="formData.requirePassword"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email" :error="fieldErrors.email">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile" :error="fieldErrors.mobile">
          <el-input v-model="formData.mobile"></el-input>
        </el-form-item>
        <el-form-item label="通讯地址" prop="address">
          <el-input v-model="formData.address"></el-input>
        </el-form-item>
        <el-form-item label="用户类型" prop="role">
          <el-radio-group v-model="formData.role">
            <el-radio label="1" >作者</el-radio>
            <el-radio label="2" >专家</el-radio>
            <el-radio label="3" >编辑</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onsubmit()">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
 
<script>
    import {userRegister} from "@/api";

    export default {
        props: [],
        watch: {},
        data(){
          return{
            formData: {
              nickname:'',
              username: '',
              password: '',
              requirePassword:'',
              email:'',
              mobile:'',
              address:'',
              role:'1',
            },
            rules: {
              nickname: [
                {
                  required: true,
                  trigger: 'blur',
                  message:'请输入昵称'
                }
              ],
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
              requirePassword: [
                {
                  required: true,
                  trigger: 'blur',
                  message:'请输入确认密码'
                },
                {
                  validator:this.checkRequirePassword,
                  trigger:'blur'
                }
              ],
              email: [
                {
                  required: true,
                  trigger: 'blur',
                  message:'请输入邮箱'
                }
              ],
              mobile: [
                {
                  required: true,
                  trigger: 'blur',
                  message:'请输入手机号'
                }
              ],
              address: [
                {
                  required: true,
                  trigger: 'blur',
                  message:'请输入地址'
                }
              ],
              role: [
                {
                  required: true,
                  trigger: 'change',
                }
              ],
            },
            fieldErrors: {}, // 存储错误信息
          }
        },
        created() {},
        mounted() {},
        methods:{
          async onsubmit(){
            let res={}
            let flag=true;

            this.$refs['formData'].validate(valid => {
              if (!valid) {
                flag=false;
                this.$message('输入内容不合法')
              }
            })
            if (!flag){
              return;
            }
            //校验参数
            if (this.formData.username === '' || this.formData.password === '') {
              this.$message('用户名或密码不合法')
              return;
            }

            //发起网络请求
            await userRegister(this.formData)
                .then(function (response) {
                  res = response.data;
                  //处理返回结果
                  if (response.code === 200) {
                    this.$router.push('/login');
                    this.$message('注册成功');
                  }
                }.bind(this))
                .catch(function (error) {
                  this.$message(error.message);
                }.bind(this));
          },

          //校验密码与确认密码
          checkRequirePassword(rule, value, callback) {
            if (!value) {
              callback(new Error('请输入确认密码'));
            } else if (value !== this.formData.password) {
              callback(new Error('确认密码与密码不一致'));
            } else {
              callback(); // 验证通过
            }
          },
        },
        components:{
         
        },
        beforeDestroy() {}
        
    }
</script>

<style lang='less' scoped>
@import "../less/global.less";
.loginForm{
  margin: 0 auto;
  .el-button--primary{
    width: 300px;
  }
}
</style>