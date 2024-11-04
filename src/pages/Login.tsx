import { loginWithGoogleRedirect } from '../services/authService';

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogleRedirect();
    } catch (error) {
      console.error('Falha ao fazer login com Google:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleGoogleLogin}>Login com Google</button>
    </div>
  );
};

export default Login;
