<template>
  <div class="container">
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div class="user-info">
              <img src="../assets/images/20250103213434.jpg" alt="">
              <div class="user">
                <p class="username">User</p>
                <p class="role">普通用户</p>
              </div>
            </div>
            <div class="welcome">
              欢迎来到期刊在线投稿管理系统！
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content bg-purple-light">
          <el-card class="box-card">
            <div class="hot-periodical">
              <h3 class="hot-periodical-title">热门期刊 - 《Science》</h3>
              <div class="hot-periodical-info">
                <img src="../assets/images/science.jpg" alt="">
                <div class="hot-periodical-desc">
                  <p>作者： <span>user</span></p>
                  <p>简介：
                    <span>是一个要求确实遵守其基本原则且立基于客观事实的系统性研究领域，以可被检验的假说与 ...</span></p>
                  <p>投稿时间： <span>2022-10-11 10:49:40</span></p>
                  <p>点赞数量： <span>20</span></p>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="log-record">
          <h3 class="log-record-title">系统日志记录</h3>
          <el-table
              :data="tableData"
              style="width: 100%">
            <el-table-column
                prop="id"
                label="序号"
                width="50px"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="操作内容">
            </el-table-column>
            <el-table-column
                prop="methodName"
                label="方法名称"
            >
            </el-table-column>
            <el-table-column
                prop="requestMethod"
                label="请求方式">
            </el-table-column>
            <el-table-column
                prop="ipAddr"
                label="请求地址">
            </el-table-column>
            <el-table-column
                prop="url"
                label="请求路径"
            >
            </el-table-column>
            <el-table-column
                prop="requestTime"
                label="请求时间"
                :formatter="formatDate"
            >
            </el-table-column>
            <el-table-column
                prop="operator"
                label="操作人">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getCurrentUser, operateLog} from "@/api";
import dayjs from "dayjs";

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    let res = {}
    operateLog()
        .then(function (response) {
          console.log(response.data)
          res = response.data
          this.tableData = res.data;
        }.bind(this))
        .catch(function (error) {
          console.log(error);
        }.bind(this));
  },
  async created() {
    let res = {}
    await getCurrentUser().then(response => {
      res = response.data;
    }).catch(function (error) {
      console.log(error);
    })
    //把用户信息设置到store中
    console.log('userVo',res.data)
    this.$store.commit('setUserVo',res.data);
  },
  methods: {
    formatDate(row, column, cellValue, index) {
      // 使用 dayjs 格式化日期
      return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss');
    }
  }
}
</script>

<style lang="less" scoped>
.user-info {
  display: flex;
  align-items: center;
  //padding-bottom: 10px;
  border-bottom: 1px solid #999999;

  img {
    width: 150px;
    height: 150px;
    margin-right: 30px;
  }

  .user {
    color: #999999;

    .username {
      font-size: 32px;
    }

    .role {
      font-size: 16px;
    }
  }
}

.welcome {
  color: #999999;
  margin: 10px 0 0 0;
}

.hot-periodical {
  .hot-periodical-title {
    margin: 5px 0;
    color: #999999;
  }

  .hot-periodical-info {
    display: flex;

    img {
      width: 150px;
      height: 150px;
      margin-right: 10px;
    }

    .hot-periodical-desc {
      p {
        color: #999999;
        margin: 10px 0;
      }
    }
  }
}

.box-card {
  margin: 5px;
}

.log-record {
  .log-record-title {
    color: #999999;
    margin: 10px 5px 5px 10px;
  }
}
</style>/