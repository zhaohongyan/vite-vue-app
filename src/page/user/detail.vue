<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getUserDetail } from './service'
const router = useRouter();
const route = useRoute();
const params = route.params;
console.log('params', params)

const state = reactive({
  detail: {}
})

const getDetail = () => {
  getUserDetail({ id: params.id }).then(res => {
    state.detail = res.data;
  })
}

onMounted(() => {
  getDetail()
})
</script>

<template>
  <div>
    <el-button type="primary" @click="router.back()">返回</el-button>
    <div>name: {{ state.detail.name }}</div>
    <div>pass: {{ state.detail.pass }}</div>
    <div>age: {{ state.detail.age }}</div>
    <div>city: {{ state.detail.city }}</div>
  </div>
</template>