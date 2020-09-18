import React from 'react';

import styles from './styles.module.css';

export const Component = ({ children, isCentered, isCompact, onClick }) => (
  <button
    className={`${styles.button} ${isCentered && styles.centered} ${
      isCompact && styles.compact
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

Component.displayName = 'Button';
