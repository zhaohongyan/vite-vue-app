<script setup>
import { getCurrentInstance, reactive } from 'vue';
import Step1 from './components/Step1.vue';
import Step2 from './components/Step2.vue';
const { proxy } = getCurrentInstance();

const state = reactive({
  index: 1,
  name: undefined,
})

const goNext = (params) => {
  if (params.currentStep === 1) {
    state.name = params.name;
    state.index = 2;
  }
}
</script>

<template>
  <div class="todoList">
    <Step1 v-if="state.index === 1" @next="goNext"/>
    <Step2 v-if="state.index === 2" :name="state.name" />
  </div>
</template>

<style scoped lang="less">
.todoList {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url('@/assets/panda.png');
  background-position: center center;
}
</style>