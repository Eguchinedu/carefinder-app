import {createSlice} from '@reduxjs/toolkit';
import { IUser } from '../types/User';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface AuthState {
    user: null | IUser;
}

const initialState: AuthState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;