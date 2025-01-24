<template>
  <div class="form-container">
    <h1>稿件上传页面</h1>
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="标题" required>
        <el-input v-model="formData.title"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="description" required>
        <el-input type="textarea" v-model="formData.description"></el-input>
      </el-form-item>
      <el-form-item label="投稿时间" required>
        <el-col :span="4">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="formData.date"
                            style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="4">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="formData.time" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="稿件封面" required>
        <el-upload
            class="upload-demo"
            action="#"
            :auto-upload=false
            :on-change="uploadChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :limit="1"
            list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传png,jpg,pdf,jpeg，且不超过2MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="稿件上传" required>
        <el-upload
            class="upload-demo"
            action="#"
            :auto-upload=false
            :on-change="uploadChange"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传pdf/doc/docx文件，且不超过2MB</div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {uploadManuscript} from "@/api";

export default {
  data() {
    return {
      formData: {
        title: '',
        description: '',
        date: '',
        time: '',
        files: [],
      },
      fileList: [],
    }
  },
  methods: {
    async onSubmit() {
      let sumFormData = new FormData();
      sumFormData.append('title', this.formData.title);
      sumFormData.append('description', this.formData.description);
      sumFormData.append('date', this.formData.date);
      sumFormData.append('time', this.formData.time);

      //循环添加数组
      if (this.formData.files && this.formData.files.length > 0) {
        this.formData.files.forEach((file) => {
          console.log(file)
          sumFormData.append('files', file);
        })
      }
      console.log(sumFormData.get("files"));

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      }

      //发送axios请求
      await uploadManuscript(sumFormData, config).then(response => {
        let res = response.data;
        console.log(res)
        if (res.code === 200) {
          //this.$message('稿件上传成功');
          this.$message({
            message:'上传成功',
            type:'success'
          })
        }else {
          this.$message({
            message:'上传失败',
            type:'error'
          })
        }
      }).catch(error => {
        console.log(error);
      })
      ;
    },
    uploadChange(file, fileList) {
      if (!this.formData.files[0]) {
        this.formData.files[0] = fileList[0].raw;
      } else {
        this.formData.files[1] = fileList[0].raw;
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
}
</script>
<style scoped lang="less">
.form-container {
  .el-col-2 {
    width: 10px;
    margin-left: 10px;
    margin-right: 10px;
  }
}
</style>