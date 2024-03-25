<template>
  <div class="HomePage">
    <el-input v-model="inputVal" style="width: 240px" placeholder="Please input" />
    {{ inputVal }}
    <el-button @click="clickButton">点击</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElInput, ElButton } from "element-plus";
const inputVal = ref("")
function clickButton() {
  console.log(inputVal.value);
}
</script>

<style lang="less" scoped>
.HomePage {
  width: 100%;
}
</style>