import axios from 'axios';
import { message } from 'antd';

//视频云后端接口
export const API = createVCloudAPI();

function createVCloudAPI() {
    var Axios = axios.create({
        baseURL: "http://123.57.177.252/",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    });
    return Axios;
}


