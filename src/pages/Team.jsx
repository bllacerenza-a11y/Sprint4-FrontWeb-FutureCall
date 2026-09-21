import TeamMember from '../components/TeamMember.jsx';
import { team } from '../data/team.js';

function Team() {
  return (
    <div>
      <header className="page-hero">
        <p className="eyebrow">FutureCall / Equipe</p>
        <h1>Três áreas. Uma solução.</h1>
        <p>A Sprint 4 reúne front-end, inteligência artificial e arquitetura mobile.</p>
      </header>

      <section className="grid border-t border-ink md:grid-cols-3" aria-label="Integrantes da FutureCall">
        {team.map((member, index) => (
          <TeamMember key={member.rm} member={member} index={index} />
        ))}
      </section>

      <section className="section-grid">
        <div className="section-label">
          <span>FC</span>
          <p>Nosso papel</p>
        </div>
        <div className="section-content">
          <p className="section-kicker">Challenge JOVI</p>
          <h2>A FutureCall conecta a experiência do aplicativo com uma apresentação web clara e funcional.</h2>
        </div>
      </section>
    </div>
  );
}

export default Team;
