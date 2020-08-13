import React, { useEffect, useState } from 'react';

import { useLanguageCode } from '../I18n';

import { startAcuity } from './startAcuity';
import styles from './styles.module.css';

export const Component = ({ onSubmit, responseId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const languageCode = useLanguageCode();

  const handleMessage = (event) => {
    if (!event || !event.data || !event.origin.includes('acuity')) return;

    if (event.data.includes('sizing')) setIsLoaded(true);

    if (event.data.includes('load:')) onSubmit();
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    if (!responseId) return;
    startAcuity(languageCode, responseId);
  }, [responseId]);

  return (
    <div
      className={`${styles.container} ${isLoaded && styles.visible}`}
      id="acuity-container"
    />
  );
};

Component.displayName = 'Acuity';
