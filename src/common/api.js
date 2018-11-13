// Base API Configuration //

import axios from 'axios';

export const API = axios.create({
    baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
    // Set common parameters for each request to API.
    config.params.APPID = 'a608266e5e091ba8df358cceae21404b';
    config.params.units = 'imperial';
    return config;
}, function (error) {
    return Promise.reject(error);
});
    
