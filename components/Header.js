import Link from 'next/link';
import React from 'react';
import Styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header>
      <nav className={Styles.nav}>
        <span className={Styles.logo}>Logo</span>
        <ul className={Styles.pages}>
          <li className={Styles.link}>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className={Styles.link}>
            <Link href='/nosotros'>
              <a>Nosotros</a>
            </Link>
          </li>
          <li className={Styles.link}>
            <Link href='/proyectos'>
              <a>Proyectos</a>
            </Link>
          </li>
          <li className={Styles.link}>
            <Link href='/contacto'>
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
