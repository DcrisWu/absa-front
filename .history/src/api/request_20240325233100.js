import axios from 'axios';
import store from '@/store/store'

export const MODE = import.meta.env.MODE ?? 'prod'

let baseUrl = ''
// 环境的切换
// 本地通过proxy跨域

if (import.meta.env.MODE == 'test') {
    baseUrl = 'http://110.64.90.217';
}
else if (import.meta.env.MODE == 'prod') {
    baseUrl = 'http://110.64.90.217';
}

// 创建axios实例
const service = axios.create({
    timeout: 15000,
    // 设置跨域 Cookie
    withCredentials: true,
    baseURL: baseUrl
})

axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
service.interceptors.request.use(config => {
    // 接口暂不需
    // if (store.state.token) {
    //     config.headers.Authorization = 'Bearer ' + store.state.token
    // }
    return config
}, error => {
    Promise.reject(error)
})

export default service




