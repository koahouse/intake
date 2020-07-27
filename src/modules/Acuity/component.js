import React, { useEffect } from 'react';

import { startAcuity } from './startAcuity';
import styles from './styles.module.css';

export const Component = ({ contactDetails }) => {
  useEffect(() => {
    if (!contactDetails) return;
    startAcuity(contactDetails);
  }, [contactDetails]);

  return <div className={styles.container} id="acuity-container" />;
};

Component.displayName = 'Acuity';
