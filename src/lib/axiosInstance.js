import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://blog-app-server-ashy.vercel.app', 
    headers: {
        'x-access-token': localStorage.getItem("token"),
    },
});

export default axiosInstance;