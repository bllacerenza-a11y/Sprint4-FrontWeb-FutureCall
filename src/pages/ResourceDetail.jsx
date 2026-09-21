import { Link, useParams } from 'react-router';
import { features } from '../data/features.js';

function ResourceDetail() {
  const { id } = useParams();
  const feature = features.find((item) => item.id === id);

  if (!feature) {
    return (
      <section className="simple-page">
        <p className="eyebrow">Recurso não encontrado</p>
        <h1>Esse conteúdo não está disponível.</h1>
        <Link to="/recursos" className="primary-button">Voltar aos recursos</Link>
      </section>
    );
  }

  return (
    <article className="detail-page">
      <div className="detail-copy">
        <p className="eyebrow">Recurso {feature.number}</p>
        <h1>{feature.title}</h1>
        <p className="detail-lead">{feature.description}</p>
        <p>{feature.details}</p>
        <Link to="/recursos" className="text-link">← Voltar aos recursos</Link>
      </div>
      <div className={`detail-image ${feature.accent}`}>
        <img src={feature.image} alt={feature.imageAlt} />
      </div>
    </article>
  );
}

export default ResourceDetail;
