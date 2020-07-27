import React from 'react';

import styles from './styles.module.css';

export const Component = ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);

Component.displayName = 'Button';
