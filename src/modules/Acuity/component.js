import React, { useEffect, useState, useRef } from 'react';

import { useIsMobile } from '../../utils';
import { useLanguageCode, useStrings } from '../I18n';
import { Button, Subheading } from '../ui';

import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

export const Component = ({ isIndividual, onSubmit, responseId }) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isFinishedTimeout = useRef(null);
  const strings = useStrings();
  const languageCode = useLanguageCode();

  const handleMessage = (event) => {
    if (!event || !event.data || !event.origin.includes('acuity')) return;

    if (isFinishedTimeout.current)
      window.clearTimeout(isFinishedTimeout.current);

    if (event.data.includes('sizing')) setIsLoaded(true);

    if (event.data.includes('acuity-appointment-scheduled')) {
      setIsSubmitted(true);
      !isMobile && onSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, [isMobile]);

  return (
    <div
      className={`${styles.container} ${isLoaded && styles.visible} ${
        isSubmitted && styles.isThanksVisible
      } ${isSubmitted && isMobile && styles.isButtonVisible}`}
      id="acuity-container"
    >
      <Subheading>{strings.THANKS}</Subheading>
      <Subheading>{strings.YOUR_PAYMENT_WAS_SUCCESSFUL}</Subheading>
      {isIndividual !== null && responseId && (
        <iframe src={getSrc(languageCode, responseId, isIndividual)} />
      )}
      <Subheading>{strings.YOULL_RECEIVE_AN_EMAIL}</Subheading>
      <Button onClick={onSubmit}>{strings.WHAT_HAPPENS_NOW}</Button>
    </div>
  );
};

Component.displayName = 'Acuity';
