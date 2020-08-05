import React, { useEffect } from 'react';

import { startAcuity } from './startAcuity';
import styles from './styles.module.css';

export const Component = ({ responseId }) => {
  useEffect(() => {
    if (!responseId) return;
    startAcuity(responseId);
  }, [responseId]);

  return <div className={styles.container} id="acuity-container" />;
};

Component.displayName = 'Acuity';
