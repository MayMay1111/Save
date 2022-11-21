import { configure } from "@testing-library/react";
import axios from "axios";
import queryString from 'query-string'

import apiConfig from "../api-config";

const axiosClient = axios.create({
    baseURL: apiConfig.baseUrl,
    headers:{
        'Content-type':'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, apikey:apiConfig.apiKey})
});

axiosClient.interceptors.request.use(async (config)=>config)

axiosClient.interceptors.response.use((res)=>{
    if(res && res.data){
        return data;
    }
    return res;
},(err)=>{
    throw err;
})

export default axiosClient