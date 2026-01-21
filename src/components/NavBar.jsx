import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../Public_Assets/Logo/Updated Logo..svg';
import { navigationLinks } from '../data/navigation';
import { SearchBar } from './SearchBar';

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);

  const closeNav = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="nav-top">
        <div className="container">
          <div className="nav-top-content">
            <div className="logo-wrapper">
              <Link to="/" aria-label="Luminious Printing home" onClick={closeNav}>
                <img src={logo} alt="Luminious Printing" />
              </Link>
            </div>

            <div className="search-wrapper">
              <SearchBar />
            </div>

            <div className="contact-wrapper">
              <a href="tel:+16472811177" className="contact-number">
                <span className="icon">📞</span> (647) 281-1177
              </a>
            </div>

            <button
              className={`nav-toggle ${isOpen ? 'open' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="primary-nav"
              onClick={toggleNav}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      <nav className={`site-nav ${isOpen ? 'open' : ''}`} aria-label="Primary navigation">
        <div className="container">
          <ul id="primary-nav">
            {navigationLinks.map(({ href, lines, subItems }) => (
              <li key={href} className={subItems ? 'has-dropdown' : ''}>
                <Link to={href} onClick={closeNav}>
                  {lines.join(' ')}
                </Link>
                {subItems && (
                  <ul className="dropdown-menu">
                    {subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <Link to={subItem.href} onClick={closeNav}>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

