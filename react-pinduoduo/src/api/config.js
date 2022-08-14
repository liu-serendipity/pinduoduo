import axios from 'axios'

export const baseUrl = "https://www.fastmock.site/mock/154169acd86bf55ccc920522bd049742/pinduoduo"

const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
});

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误')
    }
)

export { axiosInstance }