import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://blog-app-server-sable.vercel.app', 
    headers: {
        'x-access-token': localStorage.getItem("token"),
    },
});

export default axiosInstance;