import axios from 'axios';

 const instance = axios.create({
    baseURL: 'https://burger-builder-a6e21-default-rtdb.firebaseio.com/'
});

export default instance;