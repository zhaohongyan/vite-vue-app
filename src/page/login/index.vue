<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import request from '@/utils/request'

const router = useRouter();
const route = useRoute();
console.log('login route', route.path)
const form = reactive({
  name: 'Amy',
  pass: '111'
})

const onSubmit = () => {
  console.log('submit!', form)

  request({
    url: '/api/login',
    params: {
      name: form.name,
      pass: form.pass,
    }
  }).then(res => {
    console.log('res', res);
    if (res.code === '00') {
      router.push('/user/list')
    } 
  }).catch(err => {
    console.log('err', err)
  })
}

</script>

<template>
  <div class="page-login">
    <h1>Amy/111</h1>
    <h1>Emma/222</h1>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="姓名:">
        <el-input v-model="form.name" placeholder="请输入姓名" />
      </el-form-item>

      <el-form-item label="密码:">
        <el-input v-model="form.pass" type="password" placeholder="请输入密码" show-password />
      </el-form-item>

      <el-button type="primary" @click="onSubmit">登录</el-button>
    </el-form>

  </div>
</template>

<style scoped lang="less">
.page-login {
  font-size: 14px;
  color: #000;
}
</style>