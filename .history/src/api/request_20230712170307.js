import axios from 'axios';
import store from '@/store/store'

export const MODE = import.meta.env.MODE ?? 'prod'

let baseUrl = ''
// 环境的切换
// 本地通过proxy跨域
// if (import.meta.env.MODE == 'development') {
//     baseUrl = 'https://dev-nova.gift.163.com';
// }
if (import.meta.env.MODE == 'test') {
    baseUrl = 'https://test-nova.gift.163.com';
}
else if (import.meta.env.MODE == 'prod') {
    baseUrl = 'https://nova.gift.163.com';
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
    if (store.state.token) {
        config.headers.Authorization = 'Bearer ' + store.state.token
    }
    return config
}, error => {
    Promise.reject(error)
})

export default service




