import FeatureCard from '../components/FeatureCard.jsx';
import { features } from '../data/features.js';

function Resources() {
  return (
    <div>
      <header className="page-hero">
        <p className="eyebrow">Recursos / 01—05</p>
        <h1>Do registro à memória.</h1>
        <p>Cinco etapas conectam a câmera, a organização e a revisão ativa.</p>
      </header>

      <section className="feature-list" aria-label="Recursos do Smarty">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} feature={feature} featured={index % 2 === 0} />
        ))}
      </section>
    </div>
  );
}

export default Resources;
