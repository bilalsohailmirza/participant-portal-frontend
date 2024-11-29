'use client';
import Cookies from 'js-cookie';
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    authToken: string
}

const initialState: UserState = {
    authToken: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getAuthToken : (state) => { 
            const authToken = Cookies.get('authToken');
            if(authToken) {
                state.authToken = authToken;
                return state;
            }
            return state
        },
        setAuthToken : (state, action) => {
            const authToken = action.payload;
            state.authToken = authToken;
            Cookies.set('authToken', authToken, { secure: true, sameSite: 'strict' });
        },
        removeAuthToken: (state) => {
            if(Cookies.get('authToken')){
                Cookies.remove('authToken');
                state = initialState
            }
            return state;
        }
    }
})

export const { getAuthToken, setAuthToken, removeAuthToken } = userSlice.actions;
export default userSlice.reducer;