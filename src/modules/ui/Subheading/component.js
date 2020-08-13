import React from 'react';

import styles from './styles.module.css';

export const Component = ({ children, isCentered }) => (
  <h3 className={`${styles.subheading} ${isCentered && styles.centered}`}>
    {children}
  </h3>
);

Component.displayName = 'Subheading';
