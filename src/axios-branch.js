import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://serene-garden-71605.herokuapp.com/api/branch'
});

export default instance;