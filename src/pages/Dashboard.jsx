import { useAuth } from '../hooks/useAuth.js';
import { useStudyTopics } from '../hooks/useStudyTopics.js';

function Dashboard() {
  const { user, logout } = useAuth();
  const { topics, loading, error } = useStudyTopics();

  return (
    <div className="dashboard-page">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Painel privado</p>
          <h1>Olá, {user.name}.</h1>
          <p>Três conteúdos foram conectados à sua jornada de estudos de hoje.</p>
        </div>
        <button type="button" className="secondary-button" onClick={logout}>Sair</button>
      </header>

      <section className="dashboard-summary" aria-label="Resumo de estudos">
        <article><strong>03</strong><span>tópicos sugeridos</span></article>
        <article><strong>05</strong><span>recursos do Smarty</span></article>
        <article><strong>20 XP</strong><span>sequência atual</span></article>
      </section>

      <section className="study-section" aria-labelledby="titulo-conteudos">
        <div className="study-heading">
          <p className="eyebrow">API pública / Wikipédia</p>
          <h2 id="titulo-conteudos">Memory Link de hoje</h2>
        </div>

        {loading && <p className="state-message" role="status">Carregando conteúdos de estudo...</p>}
        {error && <p className="state-message error" role="alert">{error}</p>}

        {!loading && !error && (
          <div className="study-grid">
            {topics.map((topic, index) => (
              <article key={topic.id} className="study-card">
                <span>0{index + 1}</span>
                <h3>{topic.title}</h3>
                <p>{topic.extract}</p>
                <a href={topic.url} target="_blank" rel="noreferrer" className="text-link">
                  Consultar fonte <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Dashboard;
