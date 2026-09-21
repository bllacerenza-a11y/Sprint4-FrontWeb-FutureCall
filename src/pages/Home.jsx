import { Link } from 'react-router';
import ContactForm from '../components/ContactForm.jsx';
import FeatureCard from '../components/FeatureCard.jsx';
import { features } from '../data/features.js';

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="titulo-principal">
        <div className="hero-title-block">
          <p className="eyebrow">JOVI × FutureCall</p>
          <h1 id="titulo-principal">Smarty</h1>
        </div>

        <div className="hero-visual" aria-label="Tela da câmera inteligente do Smarty">
          <img src="/images/camera.png" alt="Câmera do Smarty fotografando anotações de estudo" />
        </div>

        <div className="hero-intro">
          <p>Transforme uma foto de anotações em uma rotina de estudo organizada.</p>
          <a href="#como-funciona" className="text-link">Conhecer a solução <span aria-hidden="true">↓</span></a>
        </div>

        <div className="hero-note">
          <p>Flashcards, conexões entre matérias e revisões no momento certo.</p>
          <span>Estudo com menos fricção</span>
        </div>
      </section>

      <section id="como-funciona" className="section-grid">
        <div className="section-label">
          <span>01</span>
          <p>Como funciona</p>
        </div>
        <div className="section-content">
          <p className="section-kicker">Da captura à revisão</p>
          <h2>Menos tempo organizando. Mais tempo entendendo.</h2>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Fotografe</h3>
              <p>Registre o quadro, o caderno ou um exercício usando o modo Auto IA.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Confira</h3>
              <p>Revise a matéria e os cartões sugeridos antes de salvar o conteúdo.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Pratique</h3>
              <p>Use flashcards e conexões com aulas anteriores para fortalecer a memória.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="recursos" aria-labelledby="titulo-recursos">
        <div className="section-heading">
          <p className="eyebrow">02 / Recursos</p>
          <h2 id="titulo-recursos">Uma jornada de estudo conectada</h2>
          <Link to="/recursos" className="text-link">Explorar todos <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="feature-list">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} featured={index === 0} />
          ))}
        </div>
      </section>

      <section className="audience-grid" aria-labelledby="titulo-publico">
        <div className="audience-title">
          <p className="eyebrow">03 / Para quem</p>
          <h2 id="titulo-publico">Feito para quem precisa reduzir a fricção entre registrar e estudar.</h2>
        </div>
        <article className="audience-card bg-violet text-paper">
          <span>Universitários</span>
          <p>Organização rápida para matérias densas, cálculos, códigos e revisões frequentes.</p>
        </article>
        <article className="audience-card bg-mint">
          <span>Estudantes neurodivergentes</span>
          <p>Menos carga de organização e uma jornada visual que ajuda a manter o foco.</p>
        </article>
      </section>

      <section className="contact-section" aria-labelledby="titulo-contato">
        <div>
          <p className="eyebrow">04 / Contato</p>
          <h2 id="titulo-contato">Converse com a FutureCall</h2>
          <p>Quer conhecer melhor a proposta do Smarty para o ecossistema JOVI?</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
}

export default Home;
