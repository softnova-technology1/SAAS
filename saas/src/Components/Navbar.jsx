import React, { useState, useEffect, useRef } from 'react';
import styles from "../../src/Styles/Navbar.module.css";
import logo from '../Image/logo.png';
const menuItems = [
  {
    name: 'home',
    label: 'Home',
    items: ['Home Version 1', 'Home Version 2', 'Home Version 3'],
  },
  {
    name: 'Pages',
    label: 'Pages',
    items: ['About', 'Team', 'Pricing'],
  },
  {
    name: 'Projects',
    label: 'Project',
    items: ['Project A', 'Project B', 'Project C'],
  },
  {
    name: 'services',
    label: 'Service',
    items: ['Design', 'Development', 'SEO'],
  },
  {
    name: 'Blogs',
    label: 'Blog',
    items: ['Latest', 'Popular', 'Tutorials'],
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
    <header className={styles.navbar}>
      <div className={styles.logoArea}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.logoText}><strong>Soft</strong>Nova</span>
      </div>

      <nav className={styles.menu} ref={menuRef}>
        {menuItems.map((item) => (
          <div className={styles.dropdown} key={item.name}>
            <button
              className={styles.menuItem}
              onClick={() => handleDropdown(item.name)}
            >
              {item.label} <span className={styles.arrow}>▼</span>
            </button>
            {openMenu === item.name && (
              <div className={styles.dropdownContent}>
                {item.items.map((subItem, i) => (
                  <div key={i}>{subItem}</div>
                ))}
              </div>
            )}
          </div>
        ))}
        <a href="#contact" className={styles.menuItem}>
          Contact
        </a>
      </nav>


      <div className={styles.actions}>
        <button className={styles.searchIcon}>🔍</button>
        <button className={styles.cta}>Get Started →</button>
      </div>
    </header>
    <header className={styles.header} >
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
          <li>Home <span>+</span></li>
          <li>Pages <span>+</span></li>
          <li>Project <span>+</span></li>
          <li>Services <span>+</span></li>
          <li>Blog <span>+</span></li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
   </>
  );
};

export default Navbar
