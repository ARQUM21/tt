import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:4444',
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }
})


// apiClient.interceptors.response((res) => {
//     return res;
// },(error) => {
//     return error;
// })

export default apiClient;