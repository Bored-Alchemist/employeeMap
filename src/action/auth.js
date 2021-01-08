import { LOGIN, REGISTER, URL, LOAD_USER, LOAD_ERROR, USER_DATA } from './types';
import * as axios from 'axios';
import {toast} from './toast';
import { Buffer } from "buffer";

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

const apikey = "apikey";
const thefooods = "thefooods"

const token = Buffer.from(`${apikey}:${thefooods}`, 'utf8').toString('base64')

export const forgotpassword = (payload) => async dispatch => {
    try {
        console.log('API clled')
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/resetpasswordlink.php`, payload,  {headers: {'Authorization': `Basic ${token}`}});
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', "Password Reset Link Sent"));
            return response.data
        } else {
            dispatch(toast('err', "Error"));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error);
     if(error.response) {
         
        dispatch(toast('err', "Error"));
         return {
             success: false, data: "Error"
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

export const walletinfo = (payload) => async dispatch => {
    try {
        console.log('API clled')
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/getwalletbalance.php`, payload,  {headers: {'Authorization': `Basic ${token}`}});
        if(response.data.success == true || response.data.success == 'true') {
            return response.data
        } else {
            dispatch(toast('err', "Error"));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error);
     if(error.response) {
         
        dispatch(toast('err', "Error"));
         return {
             success: false, data: "Error"
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

export const feedbackapi = (payload) => async dispatch => {
    try {
        console.log('API clled')
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/sendfeedback.php`, payload,  {headers: {'Authorization': `Basic ${token}`}});
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', "Thanks For The Feedback!"));
            return response.data
        } else {
            dispatch(toast('err', "Error"));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error);
     if(error.response) {
         
        dispatch(toast('err', "Error"));
         return {
             success: false, data: "Error"
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

export const newlogin = (payload) => async dispatch => {
    try {
        console.log('API clled')
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/login.php`, payload, {headers: {'Authorization': `Basic ${token}`}});
        console.log(response.data);
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', "Login Successful"));
            return response.data
        } else {
            dispatch(toast('err', "Error"));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error);
     if(error.response) {
         
        dispatch(toast('err', "Error"));
         return {
             success: false, data: "Error"
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

export const vendorDetail = (payload) => async dispatch => {
    try {
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/custdashboard.php`, payload, {headers: {'Authorization': `Basic ${token}`}});
        if(response.data.success == true || response.data.success == 'true') {
            
            return response.data
        } else {
            dispatch(toast('err', "Error"));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error);
     if(error.response) {
         
        dispatch(toast('err', "Error"));
         return {
             success: false, data: "Error"
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


export const register = (payload) => async dispatch => {
    try {
        // console.log('API clled')
        const response = await axios.post(`http://food.breeur.in/api/custregister.php`, payload, config);
        console.log('========>', response.data);
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', response.data.message));
            return response.data
        } else {
            dispatch(toast('err', response.data.message));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error.response);
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

export const generateUserOtp = (mobile) => async dispatch => {
    try {
        // console.log('API clled')
        if(!mobile) {
            dispatch(toast('err', 'Mobile is required!'));
            return {success: false}
        } else {
            const response = await axios.post(`http://food.breeur.in/api/dutymanagerlogin.php/${mobile}`, config);
            console.log(response.data);
            if(response.data.success) {
                dispatch(toast('success', response.data.message));
                return response.data;
            } else {
                dispatch(toast('err', response.data.message));
                return {success: false}
            }
        }
       
    } catch (error) {
        console.log(error.response);
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

export const listOfFoods = (payload) => async dispatch => {
    try {
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/getmenu.php`, payload, {headers: {'Authorization': `Basic ${token}`}});
            if(response.data.success) {
                return response.data;
            } else {
                dispatch(toast('err', response.data.message));
                return {success: false}
            }
        
       
    } catch (error) {
        console.log(error.response);
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


export const createOrder = (payload) => async dispatch => {
    try {
        // console.log('API clled')
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/createorder.php`, payload, {headers: {'Authorization': `Basic ${token}`}});
        console.log('========>', response.data);
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', "Order Successfull"));
            return response.data
        } else {
            dispatch(toast('err', "Error"));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error.response);
     if(error.response) {
         
        dispatch(toast('err', "Error"));
         return {
             success: false, data: "Error"
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

export const getVenderlist = (payload) => async dispatch => {
    try {
        // console.log('API clled')
        const response = await axios.post(`http://food.breeur.in/api/getcafelist.php`, payload, config);
        console.log('========>', response.data);
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', response.data.message));
            return response.data
        } else {
            dispatch(toast('err', response.data.message));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error.response);
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

export const getDensity = (payload) => async dispatch => {
    try {
        // console.log('API clled')
        const response = await axios.post(`http://food.breeur.in/api/getdensity.php`, payload, config);
        console.log('========>', response);
        if(response.data.success == true || response.data.success == 'true') {
            
            return response.data
        } else {
            // dispatch(toast('err', response.data.message));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error.response);
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

export const getCalories = (payload) => async dispatch => {
    try {
        // console.log('API clled')
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/gethealthtracker.php`, payload, {headers: {'Authorization': `Basic ${token}`}});
        console.log('========>', response);
        if(response.data.success == true || response.data.success == 'true') {
            
            return response.data
        } else {
            // dispatch(toast('err', response.data.message));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error.response);
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


export const getOrders = (payload) => async dispatch => {
    try {
        // console.log('API clled')
        const response = await axios.post(`http://data.thefooods.com/v1/corporate/customer/getcurrentorders.php`, payload, {headers: {'Authorization': `Basic ${token}`}});
        console.log('========>', response);
        if(response.data.success == true || response.data.success == 'true') {
            
            return response.data
        } else {
            // dispatch(toast('err', response.data.message));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
        console.log(error.response);
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