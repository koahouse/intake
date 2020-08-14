import React from 'react';

import styles from './styles.module.css';

export const Component = ({ children, isCentered, onClick }) => (
  <button
    className={`${styles.button} ${isCentered && styles.centered}`}
    onClick={onClick}
  >
    {children}
  </button>
);

Component.displayName = 'Button';
