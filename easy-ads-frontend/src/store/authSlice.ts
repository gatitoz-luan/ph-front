// src/store/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
    loading: boolean;
}

const initialState: AuthState = {
    user: null,
    isLoggedIn: false,
    loading: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.loading = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.loading = false;
        },
        loginFailure(state) {
            state.loading = false;
        },
        logout(state) {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
