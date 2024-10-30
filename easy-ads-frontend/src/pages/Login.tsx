import React from 'react';
import api from '../services/api';

const Login = () => {
  const handleLogin = (provider: string) => {
    window.location.href = `${api.defaults.baseURL}/auth/${provider}`;
  };

  return (
    <div>
      <button onClick={() => handleLogin('google')}>Entrar com o Google</button>
      <button onClick={() => handleLogin('facebook')}>Entrar com o Facebook</button>
    </div>
  );
};

export default Login;
