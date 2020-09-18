import React from 'react';

import styles from './styles.module.css';

export const Component = ({ children }) => (
  <p className={`${styles.smallPrint}`}>{children}</p>
);

Component.displayName = 'SmallPrint';
