<script setup>
import { onMounted, reactive, getCurrentInstance } from 'vue';
import { uniqueId } from 'lodash';

const { proxy } = getCurrentInstance();
const props = defineProps(['name']);

const initList = [
  { id: '1', title: '努力挣钱', fixed: true, checked: false, },
  { id: '2', title: '学英语', fixed: true, checked: false, },
  { id: '3', title: '提高专业技能', fixed: true, checked: false }
]
const state = reactive({
  value: undefined,
  todoList: initList
});


onMounted(() => {

})

const addItem = () => {
  state.todoList.push({
    title: state.value,
    id: uniqueId('id_'),
    fixed: false,
  })
  state.value = undefined
}

const deleteItem = (record) => {
  state.todoList = state.todoList.filter(item => item.id !== record.id)
}

</script>


<template>
  <div>
    <h1>你好，{{ props.name }}！</h1>
    <h3>今日需要做的事项清单</h3>
    <el-space>
      <el-input v-model="state.value" placeholder="请输入事项" style="width: 240px" size="large"></el-input>
      <el-button type="primary" @click="addItem">增加</el-button>
    </el-space>

    <ul>
      <li v-for="(item, index) in state.todoList" :key="index">
        <el-space>
          <el-checkbox v-model="item.checked" :label="item.title" size="large"></el-checkbox>
          <el-popconfirm title="确定要删除吗？" confirm-button-text="确定" cancel-button-text="取消" @confirm="deleteItem(item)">
            <template #reference>
              <el-button v-if="!item.fixed" size="small" type="danger">删除</el-button>
              <el-icon v-else color="#409efc" :size="20">
                <StarFilled />
              </el-icon>
            </template>
          </el-popconfirm>
        </el-space>
      </li>
    </ul>
  </div>
</template>

