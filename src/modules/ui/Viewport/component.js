import React from 'react';

import styles from './styles.module.css';

export const Component = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Component.displayName = 'Viewport';
