import axios from 'axios';

const userApi = axios.create({
    baseURL:'https://localhost:3333',
});

export default userApi;