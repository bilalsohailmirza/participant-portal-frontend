'use client';
import Cookies from 'js-cookie';
import { createSlice } from "@reduxjs/toolkit";

export interface SocietyState {
    id: string,
    name: string,
    description: string,
    about: string,
    members: []
}

const initialState: SocietyState = {
    id: "",
    name: "",
    description: "",
    about: "",
    members: []
}

export const societySlice = createSlice({
    name: 'society',
    initialState,
    reducers: {
        setSociety : (
            // state,
            //  action
            ) => {
            
            // state = action.payload;
        },
        getId : (state) => { 
            
            // if(authToken) {
            //     state.authToken = authToken;
            //     return state;
            // }
            return state
        },
        setId : (
            // state, action
        ) => {
            // const token = action.payload;
            // state.authToken = token;
            // Cookies.set('authToken', state.authToken, { secure: true, sameSite: 'strict' });
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
