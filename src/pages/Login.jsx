import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth.js';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/painel" replace />;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const authenticated = login(email, password);

    if (!authenticated) {
      setError('E-mail ou senha incorretos. Use os dados de demonstração.');
      return;
    }

    navigate('/painel', { replace: true });
  }

  return (
    <section className="login-page">
      <div className="login-intro">
        <p className="eyebrow">Área do aluno</p>
        <h1>Continue de onde parou.</h1>
        <p>Acesse a demonstração privada com os dados informados no formulário.</p>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="demo-access">
          <strong>Acesso para avaliação</strong>
          <span>aluno@smarty.com</span>
          <span>Senha: smarty123</span>
        </div>
        <div>
          <label htmlFor="login-email">E-mail</label>
          <input
            id="login-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="login-password">Senha</label>
          <input
            id="login-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button className="form-submit" type="submit">Entrar no painel <span aria-hidden="true">↗</span></button>
        {error && <p className="form-error" role="alert">{error}</p>}
      </form>
    </section>
  );
}

export default Login;
