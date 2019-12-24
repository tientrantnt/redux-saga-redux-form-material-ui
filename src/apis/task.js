import axiosService from './../commons/axiosService';
import {API_ENDPOINT} from './../constants';
import qs from 'query-string';

const url = 'task';

export const getList = (params = {})=>{
    let queryParams = '';
    if(Object.keys(params > 0)){
        queryParams = `?${qs.stringify(params)}`;
    }
    return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
}

export const addTask = data  =>{
    return axiosService.post(`${API_ENDPOINT}/${url}`,data);
}