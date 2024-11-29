'use client'
import {useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
export const getAuthStatus = () => {
    const userAuthStatus = useSelector((state: RootState) => state.user.authToken)
    return userAuthStatus;
}