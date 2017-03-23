import React from 'react';
import logo from './logo.svg';
import styles from './styles.css';

const Demo = ({ children }) => (
  <div className={styles.app}>
    <div className={styles.appHeader}>
      <img src={logo} className={styles.appLogo} alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className={styles.appIntro}>
      To get started, edit <code>src/components/demo/index.js</code> and save to reload.
    </p>
    <div>{children}</div>
  </div>
);

export default Demo;
