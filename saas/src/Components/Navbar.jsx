import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";   // ✅ Only Link
import styles from "../../src/Styles/Navbar.module.css";
import logo from '../Image/logo.png';

const menuItems = [
  {
    name: 'home',
    label: 'Home',
    href: '#hero',   // ✅ keep anchor scroll
  },
  {
    name: 'about',
    label: 'About',
    items: ['Team'],
    link: '/about',  // ✅ lowercase key
  },
  {
    name: 'projects',
    label: 'Projects',
    link: '/projects',
  },
  {
    name: 'services',
    label: 'Services',
    items: ['Design', 'Development', 'SEO'],
    link: '/services',
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const menuRef = useRef(null);

  const handleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* --- Desktop Navbar --- */}
      <header className={styles.navbar}>
        <div className={styles.logoArea}>
          <img src={logo} alt="Logo" className={styles.logo} />
          <span className={styles.logoText}><strong>Soft</strong>Nova</span>
        </div>

        <nav className={styles.menu} ref={menuRef}>
          {menuItems.map((item) => (
            <div className={styles.dropdown} key={item.name}>
              {item.href ? (
                // ✅ Anchor link for "Home"
                <a href={item.href} className={styles.menuItem}>
                  {item.label}
                </a>
              ) : (
                // ✅ React Router link for others
                <Link
                  to={item.link}
                  className={styles.menuItem}
                  onClick={(e) => {
                    if (item.items) {
                      e.preventDefault(); // prevent navigation if dropdown exists
                      handleDropdown(item.name);
                    }
                  }}
                >
                  {item.label} {item.items && <span className={styles.arrow}>▼</span>}
                </Link>
              )}

              {/* Dropdown */}
              {item.items && openMenu === item.name && (
                <div className={styles.dropdownContent}>
                  {item.items.map((subItem, i) => (
                    <Link
                      key={i}
                      to={`/${item.name}/${subItem.toLowerCase()}`}
                      className={styles.subItem}
                    >
                      {subItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Static Contact link */}
          <Link to="/contact" className={styles.menuItem}>
            Contact
          </Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.searchIcon}>🔍</button>
          <button className={styles.cta}>Get Started →</button>
        </div>
      </header>

      {/* --- Mobile Navbar --- */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>S</div>
          <span className={styles.logoText}>softNova</span>
        </div>

        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </div>

        <nav className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name}>
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <Link to={item.link}>{item.label}</Link>
                )}
                {item.items && <span>+</span>}
              </li>
            ))}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
