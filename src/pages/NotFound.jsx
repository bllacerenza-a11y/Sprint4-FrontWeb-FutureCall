import { Link } from 'react-router';

function NotFound() {
  return (
    <section className="simple-page">
      <p className="eyebrow">Erro 404</p>
      <h1>Página não encontrada.</h1>
      <p>O endereço acessado não faz parte da jornada do Smarty.</p>
      <Link to="/" className="primary-button">Voltar ao início</Link>
    </section>
  );
}

export default NotFound;
