import {createSlice} from '@reduxjs/toolkit'
import axios from "axios"
import { getPaymentInfo } from './paymentSlice';

const apiUrl = import.meta.env.VITE_API_URL;
export const invoiceSlice = createSlice({
    name: 'invoice',
    initialState: {
        status: "not-ready", 
        invoice: {},
    },
    reducers: {
        onCheckingInvoice: (state) => {
            state.status = "checking";
            state.invoice = {};
            state.errorMessage = undefined;
        },
        onGetInvoice: (state, {payload}) => {
            state.status = "ready";
            state.invoice = payload;
            state.errorMessage = undefined;
        },
        onGetInvoiceError: (state, {error}) => {
            state.status = "not-ready";
            state.invoice = {};
            state.errorMessage = error;
        }
    }
});

export const getInvoiceInfo = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({type: onCheckingInvoice});
            const response = await axios(`${apiUrl}/v1/invoices/${payload}/company`);
            if(response.data){
              dispatch({type: onGetInvoice, payload: response.data})
              dispatch(getPaymentInfo(payload))
            }
          } catch (error) {
            dispatch({type: onGetInvoiceError, error: error.response.data.message});
          }
    }
}

export const {
    onCheckingInvoice, onGetInvoice, onGetInvoiceError, 
} = invoiceSlice.actions
export default invoiceSlice.reducer