import { Link } from 'react-router';

function FeatureCard({ feature, featured = false }) {
  return (
    <article className={`feature-card ${featured ? 'feature-card-large' : ''}`}>
      <div className="feature-copy">
        <span className="feature-number">{feature.number}</span>
        <p className="eyebrow">{feature.shortTitle}</p>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
        <Link to={`/recursos/${feature.id}`} className="text-link">
          Ver recurso <span aria-hidden="true">↗</span>
        </Link>
      </div>
      <div className={`feature-image ${feature.accent}`}>
        <img src={feature.image} alt={feature.imageAlt} />
      </div>
    </article>
  );
}

export default FeatureCard;
