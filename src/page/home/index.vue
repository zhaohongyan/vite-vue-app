<script setup>
import { useRouter, useRoute} from 'vue-router'

const router = useRouter();
const route = useRoute();
console.log('route', route.path)
</script>


<template>
  <div>
    这里是首页
  </div>
</template>