import {createSlice} from '@reduxjs/toolkit'

export const payDataSlice = createSlice({
    name: 'paydata',
    initialState: {
      status: "not-ready",
      paydata: {
        amount: 0,
        invoices: []
      },
    },
    reducers: {
      onCheckingPayData: (state) => {
        state.status = "checking";
        state.paydata = {
          amount: 0,
          invoices: []
        };
        state.errorMessage = undefined;
      },
      onGetPayData: (state, { payload }) => {
        state.status = "ready";
        state.paydata = {
            amount: state.paydata.amount + payload.amount,
            invoices: [...state.paydata.invoices, payload.invoice]
        };
        state.errorMessage = undefined;
      },
      onGetPayDataError: (state, { error }) => {
        state.status = "not-ready";
        state.paydata = {
          amount: 0,
          invoices: []
        };
        state.errorMessage = error;
      }
    }
  });
  
// set paydata data
export const deletePayData = () => {
    return async (dispatch) => {
        try {
            dispatch({type: onCheckingPayData});
          } catch (error) {
            dispatch({type: onGetPayDataError, error: error});
          }
    }
}

// set paydata data
export const setPayData = (payload) => {
        return async (dispatch) => {
            try {
                const data = payload;
                dispatch({type: onGetPayData, payload: data})    
              } catch (error) {
                dispatch({type: onGetPayDataError, error: error});
              }
        }
    }

export const {
    onCheckingPayData, onGetPayData, onGetPayDataError, 
} = payDataSlice.actions
export default payDataSlice.reducer