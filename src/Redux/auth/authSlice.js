import {createSlice} from '@reduxjs/toolkit'
import { getCompanyInfo } from "../../Redux/auth/companySlice";
import axios from "axios"
const apiUrl = import.meta.env.VITE_API_URL;
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: "not-authenticated", // 'authenticated, checking'
        user: {},
        token: null,
        errorMessage: undefined,
        statusRegister: "not-registered", // 'registered' , 'checking'
        registerMessage: undefined,
    },
    reducers: {
        onChecking: (state) => {
            state.status = "checking";
            state.user = {};
            state.token = null;
            state.errorMessage= undefined;
        },
        onLogin: (state, {payload}) => {
            state.status = "authenticated";
            state.user = payload.user;
            state.token = payload.token;
            state.errorMessage= undefined;
            //console.log(payload.user)
        },
        onLoginError: (state, {error}) => {
            state.status = "not-authenticated";
            state.user = {};
            state.token = null;
            state.errorMessage = error;
            //console.log(payload)
        },
        onLogout: (state) => {
            state.status = "not-authenticated";
            state.user = {}
            state.token = null
            state.errorMessage= undefined
        },
        onCheckingRegister: (state) => {
            state.statusRegister = 'checking'
            state.registerMessage = undefined
        },
        onRegister: (state, {payload}) => {
            console.log(payload, "payload de register")
            state.statusRegister = "registered"
            state.registerMessage = undefined
        },
        onRegisterError: (state, {error}) => {
            console.log(error, "error")
            state.statusRegister = "not-registered"
            state.registerMessage = error
        },
        onDeleteRegister: (state) => {
            state.statusRegister = "not-registered"
            state.registerMessage = undefined
        }
    }
});

export const loginuser = (payload) => {
console.log(payload)
    return async (dispatch) => {
        try {
            dispatch({type: onChecking});
            const response = await axios.post(`${apiUrl}/v1/auth/login`, payload);
            if(response.data.token){
              dispatch({type: onLogin, payload: response.data})
              dispatch(getCompanyInfo(response.data.user.companies[0]))
            }
          } catch (error) {
            dispatch({type: onLoginError, error: error.response.data.message});
          }
    }
}

export const registeruser = (payload) => {
    return async(dispatch)=> {
        try {
            dispatch({type: onCheckingRegister})
            const data = await axios.post(`${apiUrl}/v1/auth/register`, payload)
            console.log(data)
            if(data) {
                dispatch({type: onRegister, payload: data})
            }
        } catch (error) {
            dispatch({type: onRegisterError, error: error.response.data.message})
        }
    }
}
export const deleteinforegister = () => {
    return async(dispatch)=> {
        dispatch({type: onDeleteRegister})
    }
}
export const {
    onChecking, onLogin, onLogout, onLoginError, onCheckingRegister, onRegister, onRegisterError, onDeleteRegister
} = authSlice.actions
export default authSlice.reducer