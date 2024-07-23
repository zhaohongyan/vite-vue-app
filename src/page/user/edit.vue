<script setup>
import { reactive, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getUserDetail, editUser } from './service';
import { getCurrentInstance } from 'vue';

const { proxy } = getCurrentInstance();
const router = useRouter();
const route = useRoute();

const params = route.params
const state = reactive({
  detail: {},
})
const form = reactive({
  name: '',
  pass: '',
  age: 0,
  city: ''
})

const getDetail = () => {
  getUserDetail({ id: params.id }).then(res => {
    state.detail = res.data;
    form.name = state.detail.name;
    form.pass = state.detail.pass;
    form.age = state.detail.age;
    form.city = state.detail.city;
  })
}

onMounted(() => {
  getDetail()
})

const onSubmit = () => {
  console.log('submit!');
  editUser({ ...form, id: Number(params.id) }).then(() => {
    proxy.$message.success('修改成功')

    router.back();
  }).catch(err => {
    console.log(err)
  })
}

</script>

<template>
  <div class="page">
    <el-form>
      <el-form-item label="name">
        <el-input v-model="form.name" disabled />
      </el-form-item>

      <el-form-item label="pass">
        <el-input v-model="form.pass" />
      </el-form-item>

      <el-form-item label="age">
        <el-input-number v-model="form.age" :step="5" />
      </el-form-item>

      <el-form-item label="city">
        <el-select v-model="form.city">
          <el-option label="上海" value="上海" />
          <el-option label="北京" value="北京" />
          <el-option label="广州" value="广州" />
          <el-option label="深圳" value="深圳" />
        </el-select>
      </el-form-item>

      <el-button type="primary" @click="onSubmit">提交</el-button>
    </el-form>
  </div>
</template>

<style scoped lang="less">
.page {
  width: 300px;
}
</style>