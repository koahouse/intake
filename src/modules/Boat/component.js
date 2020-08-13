import React from 'react';

import styles from './styles.module.css';

export const Component = ({ step }) => (
  <React.Fragment>
    <div className={`${styles.boat} ${step === 0 && styles.visible}`} />
    <div
      className={`${styles.boat} ${styles.boatStep1} ${
        step === 1 && styles.visible
      }`}
    />
    <div
      className={`${styles.boat} ${styles.boatStep2} ${
        step === 2 && styles.visible
      }`}
    />
    <div
      className={`${styles.boat} ${styles.boatStep3} ${
        step === 3 && styles.visible
      }`}
    />
    <div
      className={`${styles.boat} ${styles.boatStep4} ${
        step === 4 && styles.visible
      }`}
    />
  </React.Fragment>
);

Component.displayName = 'Boat';
