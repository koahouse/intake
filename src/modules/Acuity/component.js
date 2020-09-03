import React, { useEffect, useState, useRef } from 'react';

import { useIsMobile } from '../../utils';
import { useLanguageCode } from '../I18n';
import { Button, Subheading } from '../ui';

import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

export const Component = ({ isIndividual, onSubmit, responseId }) => {
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
      setIsSubmitted(true);
      !isMobile && onSubmit();
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div
      className={`${styles.container} ${isLoaded && styles.visible} ${
        isSubmitted && styles.isThanksVisible
      } ${isSubmitted && isMobile && styles.isButtonVisible}`}
      id="acuity-container"
    >
      <Subheading>Thanks!</Subheading>
      <Subheading>
        Your payment was successful. Your intro meeting is booked for:
      </Subheading>
      {isIndividual !== null && responseId && (
        <iframe src={getSrc(languageCode, responseId, isIndividual)} />
      )}
      <Subheading>
        You’ll receive an email very soon with all the details.
      </Subheading>
      <Button onClick={onSubmit}>What happens now?</Button>
    </div>
  );
};

Component.displayName = 'Acuity';
