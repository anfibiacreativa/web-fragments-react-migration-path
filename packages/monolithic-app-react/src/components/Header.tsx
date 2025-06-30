import React from 'react';
import styles from '../styles/Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <ul className={styles.topNav}>
          <li>
          <a href="/" className={styles.iconLink}>
            <i className="fas fa-home"></i>
          </a>
          </li>
          <li className="topNavListItem">
            <a href="https://github.com/web-fragments/web-fragments" className={styles.iconLink}>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
