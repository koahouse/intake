import React from 'react';

import styles from './styles.module.css';

export const Component = ({ children, isVisible }) => (
  <div className={`${styles.container} ${isVisible && styles.isVisible}`}>
    {children}
  </div>
);

Component.displayName = 'Viewport';
