import { LOGIN, REGISTER, URL, LOAD_USER, LOAD_ERROR, USER_DATA } from './types';
import * as axios from 'axios';
import {toast} from './toast';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    },
    auth : {
        username: "apikey",
        password: "thefooods"
      }
}

export const login = (payload) => async dispatch => {
    try {
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/login.php`, payload, config);
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', response.data.message));
            return response.data
        } else {
            dispatch(toast('err', response.data.message));
            return {success: false}
        }
    } catch (error) {
        console.log(error);
     if(error.response) {
        dispatch(toast('err', error.response.data.message));
         return {
             success: false, data: error.response.data.message
         }
     }
     else {
        dispatch(toast('err', 'Error in login'));
         return {
             success: false, data: 'Error in login'
         }
     }
    }
}


export const showToast = (type, msg) => async dispatch => {
    dispatch(toast(type, msg));
}