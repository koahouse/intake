import React, { useEffect, useState, useRef } from 'react';

import { useLanguageCode } from '../I18n';

import { startAcuity } from './startAcuity';
import styles from './styles.module.css';

export const Component = ({ onSubmit, responseId }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const isFinishedTimeout = useRef(null);
  const languageCode = useLanguageCode();

  const handleMessage = (event) => {
    if (!event || !event.data || !event.origin.includes('acuity')) return;

    if (isFinishedTimeout.current)
      window.clearTimeout(isFinishedTimeout.current);

    if (event.data.includes('sizing')) setIsLoaded(true);

    if (event.data.includes('acuity-appointment-scheduled')) {
      setIsVisible(false);
      onSubmit();
    }
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
      className={`${styles.container} ${
        isLoaded && isVisible && styles.visible
      }`}
      id="acuity-container"
    />
  );
};

Component.displayName = 'Acuity';
