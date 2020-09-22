import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-anil.herokuapp.com'
})

export default instance;