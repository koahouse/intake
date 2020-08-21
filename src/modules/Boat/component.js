import React from 'react';

import styles from './styles.module.css';
import step1 from './step1@2x.png';
import step2 from './step2@2x.png';
import step3 from './step3@2x.png';
import step4 from './step4@2x.png';

export const Component = ({ step }) => (
  <React.Fragment>
    <img
      alt="boat"
      className={`${styles.boat} ${styles.boatStep0} ${
        step === 0 && styles.visible
      }`}
      src={step1}
    />
    <img
      alt="boat"
      className={`${styles.boat} ${styles.boatStep1} ${
        step === 1 && styles.visible
      }`}
      src={step2}
    />
    <img
      alt="boat"
      className={`${styles.boat} ${styles.boatStep2} ${
        step === 2 && styles.visible
      }`}
      src={step3}
    />
    <img
      alt="boat"
      className={`${styles.boat} ${styles.boatStep3} ${
        step === 3 && styles.visible
      }`}
      src={step4}
    />
  </React.Fragment>
);

Component.displayName = 'Boat';
