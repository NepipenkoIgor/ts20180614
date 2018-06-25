import axios from 'axios';
export const baseURL = 'http://learn.javascript.ru/courses/groups/api'
export const axiosInstance = axios.create({
    baseURL
})