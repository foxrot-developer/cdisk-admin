import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://c-disk.herokuapp.com/api/',
    // baseURL: 'http://localhost:5000/api/'
});

Axios.interceptors.request.use((request) => {
    document.querySelector('.loading-bg').style.display = 'block';
    return request;
})

Axios.interceptors.response.use(response => {
    document.querySelector('.loading-bg').style.display = 'none';
    return response;
}, error => {
    document.querySelector('.loading-bg').style.display = 'none';
    return error;
})

export default Axios;