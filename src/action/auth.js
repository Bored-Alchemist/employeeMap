import { LOGIN, REGISTER, URL, LOAD_USER, LOAD_ERROR, USER_DATA } from './types';
import * as axios from 'axios';
import {toast} from './toast';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
    }
}

export const login = (payload) => async dispatch => {
    try {
        console.log('API clled')
        const response = await axios.post(`http://food.breeur.in/api/custauth.php`, payload, config);
        console.log(response);
        if(response.data.success == true || response.data.success == 'true') {
            dispatch(toast('success', response.data.message));
            return response.data
        } else {
            dispatch(toast('err', response.data.message));
            return {success: false}
        }
    } catch (error) {
        // alert(error);
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
        // console.log('API clled')
        
            const response = await axios.post(`http://food.breeur.in/api/listoffood.php`, payload,config);
            console.log(response.data);
            if(response.data.success) {
                // dispatch(toast('success', response.data.message));
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
        const response = await axios.post(`http://food.breeur.in/api/createorder.php`, payload, config);
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
        const response = await axios.post(`http://food.breeur.in/api/getcalories.php`, payload, config);
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
        const response = await axios.post(`http://food.breeur.in/api/myorder_list.php`, payload, config);
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