import {createSlice} from '@reduxjs/toolkit'

import axios from "axios"
import { deletePayData } from './payDataSlice';
const apiUrl = import.meta.env.VITE_API_URL;
export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        status: "not-ready", // 'authenticated, checking'
        payment: [],
    },
    reducers: {
        onCheckingPayment: (state) => {
            state.status = "checking";
            state.payment = [];
            state.errorMessage = undefined;
        },
        onGetPayment: (state, {payload}) => {
            state.status = "ready";
            state.payment = payload;
            state.errorMessage = undefined;
        },
        onGetPaymentError: (state, {error}) => {
            state.status = "not-ready";
            state.payment = [];
            state.errorMessage = error;
        }
    }
});

export const newPayment = (payload) => {
    return async(dispatch)=> {
        try {
            const data = await axios.post(`${apiUrl}/v1/payments`, payload)
            if(data) {
                dispatch(getPaymentInfo(data.data.company))
                dispatch(deletePayData())
            }
        } catch (error) {
            dispatch({type: onGetPaymentError, error: error.response})
        }
    }
}

// obtener información de la empresa
export const getPaymentInfo = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({type: onCheckingPayment});
            const response = await axios(`${apiUrl}/v1/payments/${payload}/company`);
            if(response.data){
              dispatch({type: onGetPayment, payload: response.data})
            }
          } catch (error) {
            dispatch({type: onGetPaymentError, error: error.response.data.message});
          }
    }
}

export const {
    onCheckingPayment, onGetPayment, onGetPaymentError, 
} = paymentSlice.actions
export default paymentSlice.reducer