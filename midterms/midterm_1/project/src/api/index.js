import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});
http.interceptors.request.use((config) => {
    config.headers.Authorization = `${localStorage.getItem('accessToken')}`
    return config
})
export {http};