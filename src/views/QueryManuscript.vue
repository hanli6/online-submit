<template>
  <div class="container">
    <h1>稿件查询</h1>
    <el-table
        :data="tableData"
        style="width: 100%" border>
      <el-table-column
          prop="id"
          label="ID"
          width="200">
      </el-table-column>
      <el-table-column
          prop="title"
          label="标题"
          width="200">
      </el-table-column>
      <el-table-column
          prop="nickName"
          label="用户名"
          width="200">
      </el-table-column>
      <el-table-column
          prop="status"
          label="状态"
          width="200">
      </el-table-column>
      <el-table-column
          prop="submitTime"
          label="上传时间"
          :formatter="formatDate"
          width="200px">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              @click="visitManuscript(scope.row)">查看
          </el-button>
          <el-button
              size="mini"
              type="primary"
              @click="handleDelete(scope.$index, scope.row)">编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--弹框-查看稿件信息    -->
    <el-dialog
        title="稿件查看"
        :visible.sync="dialogVisible"
    >
      <!--查看稿件信息-->
      <el-descriptions :column="1" border>
        <el-descriptions-item label="稿件标题">{{ title }}</el-descriptions-item>
        <el-descriptions-item label="稿件描述">{{ description }}</el-descriptions-item>
        <el-descriptions-item label="稿件状态">{{ status }}</el-descriptions-item>
        <el-descriptions-item label="投稿时间">{{ submitTime }}</el-descriptions-item>
        <el-descriptions-item label="稿件封面"><img :src="coverImg" width="200px"></el-descriptions-item>
        <el-descriptions-item label="稿件下载">
          <el-link type="primary" :href="downloadUrl">点击下载</el-link>
        </el-descriptions-item>
      </el-descriptions>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<style scoped lang="less">
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<script>
import {getManuscripts} from "@/api";
import dayjs from "dayjs";

export default {
  data() {
    return {
      tableData: [],
      /*弹框的开启与关闭*/
      dialogVisible: false,
      /*稿件信息*/
      title: '',
      description: '',
      status: '',
      submitTime: '',
      coverImg: '',
      fileName:'',
      downloadUrl:'',
    }
  },
  async mounted() {
    let res = {}
    await getManuscripts().then(function (response) {
      res = response.data;
    });
    this.tableData = res.data;
    console.log("123", this.tableData);
  },
  methods: {
    formatDate(row, column, cellValue, index) {
      // 使用 dayjs 格式化日期
      return dayjs(cellValue).format('YYYY-MM-DD HH:mm:ss');
    },
    visitManuscript(row) {
      this.dialogVisible = true
      this.title = row.title
      this.description = row.description
      this.status = row.status
      this.submitTime = row.submitTime
      this.coverImg = "data:image/png;base64," + row.coverImg
      this.downloadUrl = "http://localhost:8081/api/manuscript/download?filename=" + row.fileName;
    }
  }
}

</script>