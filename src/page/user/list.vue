<script setup>
import { reactive, onMounted, getCurrentInstance } from 'vue'
import { getUserList, deleteUser } from './service'
const { proxy } = getCurrentInstance();

const state = reactive({
  list: []
});

const getList = () => {
  getUserList().then(res => {
    state.list = res.data;
  })
}

onMounted(() => {
  getList()
});

const confirm = (id) => {
  deleteUser(id).then(res => {
    proxy.$message.success('删除成功')
    getList()
  })
}

</script>

<template>
  <div class="page">
    <el-space>
      <RouterLink to="/user/add"><el-button type="primary">新增</el-button></RouterLink>
      <el-button @click="getList()">刷新</el-button>
    </el-space>

    <el-table :data="state.list" style="width: 100%">
      <el-table-column prop="id" label="id" width="180" />
      <el-table-column prop="name" label="name" width="180" />
      <el-table-column prop="pass" label="pass" />
      <el-table-column prop="age" label="age" />
      <el-table-column prop="city" label="city" />
      <el-table-column fixed="right" label="Operations" min-width="120">
        <template #default="scope">
          <RouterLink :to="`/user/detail/${scope.row.id}`">
            <el-button link type="primary">查看</el-button>
          </RouterLink>

          <RouterLink :to="`/user/edit/${scope.row.id}`">
            <el-button link type="primary">编辑</el-button>
          </RouterLink>

          <el-popconfirm title="Are you sure to delete this?" @confirm="confirm(scope.row.id)">
            <template #reference>
              <el-button link type="primary">删除</el-button>
            </template>
          </el-popconfirm>

        </template>
      </el-table-column>

    </el-table>

  </div>
</template>

<style scoped lang="less">
.page {
  li>span {
    margin-right: 8px;
  }
}

.action {
  color: green;
  cursor: pointer;
}
</style>