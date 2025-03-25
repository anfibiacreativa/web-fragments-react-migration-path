import React from 'react';
import styles from '../styles/Header.module.css';
import FragmentToggle from './FragmentToggle';
import { useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const allowedRoutes = ['/cart', '/store/catalog'];

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <ul className={styles.topNav}>
          <li>
            <a href='/' className={styles.iconLink}>
              <i className='fas fa-home'></i>
            </a>
          </li>
          <li className='topNavListItem'>
            <a
              href='https://github.com/web-fragments/web-fragments'
              className={styles.iconLink}
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
        </ul>
      </div>

      {allowedRoutes.includes(location.pathname) && <FragmentToggle />}
    </header>
  );
};

export default Header;
