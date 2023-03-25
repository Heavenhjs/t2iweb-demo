<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <div>
        <el-form-item label="图像宽度:">
          <el-select v-model="form.width" placeholder="请选择">
            <el-option label="256" value="256" />
            <el-option label="512" value="512" />
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="图像高度:">
          <el-select v-model="form.length" placeholder="请选择">
            <el-option label="256" value="256" />
            <el-option label="512" value="512" />
          </el-select>
        </el-form-item>
      </div>
      <div>
        <el-form-item label="对应文本：">
          <el-input
            v-model="form.inputContent"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="请输入想要生成的文本"
          />
        </el-form-item>
      </div>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">生成</el-button>
        <el-button type="primary" @click="onClean">清空</el-button>
      </el-form-item>
    </el-form>
  </div>
  <p v-html="image"></p>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { T2I } from "../api/t2iApi";
const form = reactive({
  inputContent: "",
  width: "",
  length: "",
});
let image = ref("<p>请输入信息后，点击生成</p>");
const onSubmit = () => {
  console.log("submit!");
  T2I(form).then((res: any) => {
    console.log(res.data);
    image.value = res.data;
  });
};
const onClean = () => {
  form.inputContent = "";
  form.length = "";
  form.width = "";
  image.value = "<p>请输入信息后，点击生成</p>";
};
</script>
<style lang="less"></style>
