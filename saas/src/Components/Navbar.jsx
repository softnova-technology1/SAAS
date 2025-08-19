import React, { useState, useEffect, useRef } from 'react';
import styles from "../../src/Styles/Navbar.module.css";
import logo from '../Image/logo.png';
import { Link } from "react-router-dom";


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
          <ul>
            <li>
              <Link to="/" className={styles.menuItem}>
                Home
              </Link>
            </li>
            <li className={styles.dropdown}>
              <button
                className={styles.menuItem}
                onClick={() => handleDropdown("about")}
              >
                About <span className={styles.arrow}>▼</span>
              </button>
              {openMenu === "about" && (
                <div className={styles.dropdownContent}>
                  <li><Link to="/About">Team</Link></li>
                </div>
              )}
            </li>
            <li className={styles.dropdown}>
              <button
                className={styles.menuItem}
                onClick={() => handleDropdown("services")}
              >
                Services <span className={styles.arrow}>▼</span>
              </button>
              {openMenu === "services" && (
                <div className={styles.dropdownContent}>
                  <li><Link to="/Team1">Team1</Link></li>
                  <li><Link to="/Team2">Team2</Link></li>
                  <li><Link to="/Team3">Team3</Link></li>
                </div>
              )}
            </li>
            <li>
              <Link to="/project" className={styles.menuItem}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Contactnav" className={styles.menuItem}>
                Contact
              </Link>
            </li>
          </ul>
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
            <li>Contact <span>+</span></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar
