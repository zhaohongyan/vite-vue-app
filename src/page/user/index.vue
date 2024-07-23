<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance();
</script>


<template>
  <div class="user-index">
    <h1>{{ proxy.msg }} 增删改查 </h1>
    <el-divider />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.user-index {
  h1 {
    text-align: center;
  }
}
</style>