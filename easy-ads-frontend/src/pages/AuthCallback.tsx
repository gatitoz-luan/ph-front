import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseClient';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(window.location.href);

      if (error) {
        console.error('Erro na autenticação:', error.message);
      } else {
        console.log('Usuário autenticado com sucesso!');
        navigate('/dashboard');
      }
    };

    handleAuthCallback();
  }, [navigate]);

  return <div>Processando login...</div>;
};

export default AuthCallback;
