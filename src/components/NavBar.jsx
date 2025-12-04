import { useState } from 'react';
import logo from '../../Public_Assets/Logo/Luminous Printing Logo 2-01.png';
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
              <a href="/" aria-label="Luminious Printing home" onClick={closeNav}>
                <img src={logo} alt="Luminious Printing" />
              </a>
            </div>

            <div className="search-wrapper">
              <SearchBar />
            </div>

            <div className="contact-wrapper">
              <a href="tel:+15551234567" className="contact-number">
                <span className="icon">📞</span> (555) 123-4567
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
                <a href={href} onClick={closeNav}>
                  {lines.join(' ')}
                </a>
                {subItems && (
                  <ul className="dropdown-menu">
                    {subItems.map((subItem) => (
                      <li key={subItem.label}>
                        <a href={subItem.href} onClick={closeNav}>
                          {subItem.label}
                        </a>
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

