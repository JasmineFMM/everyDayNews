// 引入axios库
import http from "axios"
// import qs from "qs"

// 设置公共的baseURL
http.defaults.baseURL = "http://localhost:8000"

// 请求拦截
http.interceptors.request.use(
    config =>{
        return config
    },
    error => Promise.reject(error)
)

// 响应拦截
http.interceptors.response.use(
    response => response.data,
    err => Promise.reject(err)
)

export default http