// src/services/authService.ts
import api from './api';

export const login = async (email: string, password: string) => {
    return await api.post('/auth/login', { email, password });
};

export const loginWithGoogle = () => {
    window.location.href = `${api.defaults.baseURL}/auth/google`;
};

export const loginWithFacebook = () => {
    window.location.href = `${api.defaults.baseURL}/auth/facebook`;
};
