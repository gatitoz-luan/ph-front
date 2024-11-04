// src/services/authService.ts
import api from './api'; // Adicionada a importação do `api`
import supabase from './supabaseClient';
import { clearUser } from '../store/authSlice'; // Corrigido import do clearUser

export const login = async (email: string, password: string) => {
  return await api.post('/auth/login', { email, password });
};
export const loginWithGooglePopup = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin, // Redireciona para a URL da aplicação após o login
      },
    });

    if (error) throw error;
  } catch (error) {
    console.error('Error during Google login:', error);
    throw error;
  }
};
export const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
  if (error) throw new Error('Error during Google sign-in');
};


export const loginWithGoogleRedirect = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin, // Redireciona para a URL raiz da aplicação
      },
    });
    if (error) throw error;
  } catch (error) {
    console.error('Erro durante o login com Google:', error);
    throw error;
  }
};



export const loginWithFacebook = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'facebook',
  });

  if (error) {
    console.error('Erro de login:', error.message);
  } else {
    console.log('Redirecionado para autenticação com Facebook:', data.url);
  }
};

export const logout = async (dispatch: (arg: { payload: undefined; type: string }) => void) => {
  await supabase.auth.signOut();
  dispatch(clearUser());
};
