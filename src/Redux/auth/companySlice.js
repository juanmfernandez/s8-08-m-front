import {createSlice} from '@reduxjs/toolkit'
import axios from "axios"
import { getInvoiceInfo } from './invoiceSlice';
const apiUrl = import.meta.env.VITE_API_URL;
export const companySlice = createSlice({
    name: 'company',
    initialState: {
        status: "not-ready", // 'authenticated, checking'
        company: {},
    },
    reducers: {
        onCheckingCompany: (state) => {
            state.status = "checking";
            state.company = {};
            state.errorMessage = undefined;
        },
        onGetCompany: (state, {payload}) => {
            state.status = "ready";
            state.company = payload;
            state.errorMessage = undefined;
        },
        onGetCompanyError: (state, {error}) => {
            state.status = "not-ready";
            state.company = {};
            state.errorMessage = error;
        }
    }
});


// obtener información de la empresa
export const getCompanyInfo = (payload) => {
    return async (dispatch) => {
        try {
            dispatch({type: onCheckingCompany});
            const response = await axios(`${apiUrl}/v1/companies/${payload}`);
            if(response.data){
              dispatch({type: onGetCompany, payload: response.data})
              dispatch(getInvoiceInfo(response.data._id))
            }
          } catch (error) {
            dispatch({type: onGetCompanyError, error: error.response.data.message});
          }
    }
}

export const {
    onCheckingCompany, onGetCompany, onGetCompanyError
} = companySlice.actions
export default companySlice.reducer