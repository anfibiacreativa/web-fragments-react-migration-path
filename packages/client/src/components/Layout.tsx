import React, { ReactNode } from 'react';
import Header from './Header';
import { HelmetProvider } from 'react-helmet-async';
import styles from '../styles/Layout.module.css';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <HelmetProvider>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </HelmetProvider>
      <Header />
      <main className={styles.main}>
      <div className={styles.mainWrapper}>
        {children}
      </div>
    </main>
    <footer className='footer'>
      <p><a href="">©2025 | Web Fragments Enterprise Demo</a></p>
    </footer>
    </div>
  );
};

export default Layout;
