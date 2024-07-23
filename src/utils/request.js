import axios from 'axios';
import { ElMessage } from 'element-plus'

const instance = axios.create({
  // baseURL: 'http://localhost:7001'
})

// 添加请求拦截器
// instance.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// 添加响应拦截器
instance.interceptors.response.use(async (response) => {
  const { status, data } = response;
  // console.log('response=====', response)
  if (status === 200) {
    // 对响应数据做点什么
    if (data.code !== '00') {
      ElMessage({
        message: data.message,
        type: 'error',
      })
    }
    return response.data;
  } else {
    return response;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default instance;
