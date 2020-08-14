import React from 'react';

import styles from './styles.module.css';

export const Component = ({ step }) => (
  <div
    className={`${styles.sea} ${
      {
        1: styles.seaStep1,
        2: styles.seaStep2,
        3: styles.seaStep3,
      }[step]
    }`}
  />
);

Component.displayName = 'Sea';
