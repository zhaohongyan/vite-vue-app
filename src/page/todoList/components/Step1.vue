<script setup>
import { getCurrentInstance, reactive } from 'vue';
const { proxy } = getCurrentInstance();

const emits = defineEmits(['next'])
const state = reactive({
  name: undefined,
})

const handleNext = () => {
  if (!state.name) {
    proxy.$message = '请输入姓名'
    return
  }
  emits('next', {currentStep: 1, name: state.name})
}
</script>


<template>
  <div class="step1">
    <h1>请输入你的名字</h1>
    <el-input v-model="state.name"></el-input>
    <div class="action-box">
      <el-button type="primary" @click="handleNext">下一步</el-button>
    </div>
    
  </div>
</template>

<style lang="less" scoped>
.step1 {
text-align: center;
.action-box {
  margin-top: 36px;
}
}
</style>