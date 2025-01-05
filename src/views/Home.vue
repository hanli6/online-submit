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
                prop="serialNumber"
                label="序号"
                width="180">
            </el-table-column>
            <el-table-column
                prop="operator"
                label="操作人"
                width="180">
            </el-table-column>
            <el-table-column
                prop="operatorContent"
                label="操作内容"
                >
            </el-table-column>
            <el-table-column
                prop="operatorTime"
                label="操作时间"
                width="180">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          serialNumber: '01',
          operator: '王小虎',
          operatorContent: '登录期刊在线管理系统',
          operatorTime: '2016-05-02 10:10:00'
        },
        {
          serialNumber: '02',
          operator: '王小虎',
          operatorContent: '登录期刊在线管理系统',
          operatorTime: '2016-05-02 10:10:00'
        },
        {
          serialNumber: '03',
          operator: '王小虎',
          operatorContent: '登录期刊在线管理系统',
          operatorTime: '2016-05-02 10:10:00'
        },
        {
          serialNumber: '04',
          operator: '王小虎',
          operatorContent: '登录期刊在线管理系统',
          operatorTime: '2016-05-02 10:10:00'
        },
        {
          serialNumber: '05',
          operator: '王小虎',
          operatorContent: '登录期刊在线管理系统',
          operatorTime: '2016-05-02 10:10:00'
        },
        {
          serialNumber: '06',
          operator: '王小虎',
          operatorContent: '登录期刊在线管理系统',
          operatorTime: '2016-05-02 10:10:00'
        },
        {
          serialNumber: '07',
          operator: '王小虎',
          operatorContent: '登录期刊在线管理系统',
          operatorTime: '2016-05-02 10:10:00'
        },
        ]
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