import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { RootState } from './store';
import { setUser } from './store/authSlice';
import supabase from './services/supabaseClient';
import Home from './pages/Home';
import Login from './pages/Login';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      console.log('Iniciando checkSession');

      // Verifica se há tokens no hash da URL
      const hash = window.location.hash;
      console.log('Hash da URL:', hash);

      const urlParams = new URLSearchParams(hash.slice(1));
      const accessToken = urlParams.get('access_token');
      const refreshToken = urlParams.get('refresh_token');

      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);

      if (accessToken && refreshToken) {
        console.log('Tokens encontrados, configurando sessão');
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) {
          console.error('Erro ao configurar sessão:', error.message);
        } else {
          const { data: sessionData } = await supabase.auth.getSession();
          if (sessionData?.session) {
            dispatch(setUser(sessionData.session.user));
          }
        }
      }

      setIsLoading(false); // Sessão verificada, carregamento concluído
    };

    checkSession();
  }, [dispatch]);

  // Renderiza um indicador de carregamento enquanto a verificação da sessão está em andamento
  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default App;
