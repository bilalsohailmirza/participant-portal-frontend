'use client';
import Cookies from 'js-cookie';
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
    authToken: string,
    id: string,
    name: string,
    email: string,
    phone: string,
    organization: string

}

const initialState: UserState = {
    authToken: "",
    id: "",
    name: "",
    email: "",
    phone: "",
    organization: ""
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
            const token = action.payload;
            state.authToken = token;
            Cookies.set('authToken', state.authToken, { secure: true, sameSite: 'strict' });
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