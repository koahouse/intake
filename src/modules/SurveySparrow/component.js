import React, { useEffect, useLayoutEffect } from 'react';

import { useSetLanguageCode } from '../I18n';

import { startSurveySparrow } from './startSurveySparrow';
import { getContactDetails } from './utils/getContactDetails';
import styles from './styles.module.css';

export const Component = ({ onSubmit }) => {
  const setLanguageCode = useSetLanguageCode();

  useLayoutEffect(startSurveySparrow, []);

  const handleMessage = (event) => {
    if (!event || !event.data) return;

    if (event.data.type === 'languageChanged') {
      setLanguageCode(event.data.code);
      return;
    }

    if (event.data.type === 'surveyCompleted') {
      const contactDetails = getContactDetails(event.data.response);

      onSubmit(contactDetails);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  });

  return (
    <div className={styles.container}>
      <div id="ss-widget" />
    </div>
  );
};

Component.displayName = 'SurveySparrow';
