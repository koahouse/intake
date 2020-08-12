import React, { useEffect } from 'react';

import { useLanguageCode } from '../I18n';

import { startAcuity } from './startAcuity';
import styles from './styles.module.css';

export const Component = ({ responseId }) => {
  const languageCode = useLanguageCode();

  useEffect(() => {
    if (!responseId) return;
    startAcuity(languageCode, responseId);
  }, [responseId]);

  return <div className={styles.container} id="acuity-container" />;
};

Component.displayName = 'Acuity';
