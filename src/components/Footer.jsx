import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="grid border-t border-ink bg-ink text-paper md:grid-cols-[1.5fr_1fr]">
      <div className="p-6 md:p-10">
        <p className="text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Estude no seu ritmo.</p>
        <p className="mt-6 max-w-lg text-base text-paper/70">
          Uma evolução da câmera de estudos criada pela FutureCall para o ecossistema JOVI.
        </p>
      </div>
      <div className="grid content-between gap-12 border-t border-paper/30 p-6 md:border-l md:border-t-0 md:p-10">
        <nav aria-label="Links do rodapé">
          <ul className="grid gap-3 text-sm font-bold uppercase">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/recursos">Recursos</Link></li>
            <li><Link to="/equipe">Equipe</Link></li>
            <li><Link to="/login">Área do aluno</Link></li>
          </ul>
        </nav>
        <p className="text-xs uppercase tracking-[0.14em]">© 2026 Smarty Study Camera</p>
      </div>
    </footer>
  );
}

export default Footer;
