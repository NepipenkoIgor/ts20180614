import {axiosInstance} from '../config';

export const getUsers = ()=> axiosInstance.get('/participants?key=1upx3ae')