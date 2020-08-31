import React, { useEffect, useState, useRef } from 'react';

import { useIsMobile } from '../../utils';
import { useLanguageCode } from '../I18n';
import { Button } from '../ui';

import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

export const Component = ({ onSubmit, responseId }) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isFinishedTimeout = useRef(null);
  const languageCode = useLanguageCode();

  const handleMessage = (event) => {
    if (!event || !event.data || !event.origin.includes('acuity')) return;

    if (isFinishedTimeout.current)
      window.clearTimeout(isFinishedTimeout.current);

    if (event.data.includes('sizing')) setIsLoaded(true);

    if (event.data.includes('acuity-appointment-scheduled')) {
      isMobile ? setIsSubmitted(true) : onSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div
      className={`${styles.container} ${isLoaded && styles.visible} ${
        isSubmitted && isMobile && styles.isButtonVisible
      }`}
      id="acuity-container"
    >
      {responseId && <iframe src={getSrc(languageCode, responseId)} />}
      <Button onClick={onSubmit}>Finish</Button>
    </div>
  );
};

Component.displayName = 'Acuity';
