import axios from 'axios';
import qs from 'qs';

const loginUser = async (email, password) => {
    const url = `https://reqres.in/api/login`;
    // du lieu gui len api
    const params = qs.stringify({
        email: email,
        password: password
    });
    // backend - api quy dinh
    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const response = await axios.post(url, params, config);
    const result = response.status === 200 ? response.data : {};
    return result;
}

export const apiLogin = {
    loginUser
}