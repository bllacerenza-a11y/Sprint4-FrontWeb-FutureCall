import { useState } from 'react';
import { Link } from 'react-router';
import { useAuth } from '../hooks/useAuth.js';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Link to="/" className="brand" aria-label="Smarty - página inicial" onClick={closeMenu}>
        <span className="brand-mark">S</span>
        <span>Smarty</span>
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="menu-principal"
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? 'Fechar' : 'Menu'}
      </button>

      <nav id="menu-principal" className={menuOpen ? 'menu-open' : ''} aria-label="Navegação principal">
        <ul className="header-links">
          <li><Link to="/" onClick={closeMenu}>Início</Link></li>
          <li><Link to="/recursos" onClick={closeMenu}>Recursos</Link></li>
          <li><Link to="/equipe" onClick={closeMenu}>Equipe</Link></li>
        </ul>
      </nav>

      <Link to={user ? '/painel' : '/login'} className="header-action" onClick={closeMenu}>
        {user ? 'Meu painel' : 'Entrar'} <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

export default Header;
