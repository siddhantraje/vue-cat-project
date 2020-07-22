import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'; //Header
axios.defaults.baseURL = 'https://api.thecatapi.com/v1'; //Setting Base URL;