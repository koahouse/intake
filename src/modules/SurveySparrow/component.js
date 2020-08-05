import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { useSetLanguageCode } from '../I18n';

import styles from './styles.module.css';

const ID = uuid().replace(/-/g, '');

export const Component = ({ onSubmit }) => {
  const setLanguageCode = useSetLanguageCode();

  const handleMessage = (event) => {
    if (!event || !event.data) return;

    if (event.data.type === 'languageChanged') {
      setLanguageCode(event.data.code);
      return;
    }

    if (event.data.type === 'surveyCompleted') {
      onSubmit(ID);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className={styles.container}>
      <iframe
        allowfullscreen=""
        id="ss_widget_frame"
        src={`https://koa.surveysparrow.com/widget/intake-pre-navigation/tt-5031b3?id=${ID}`}
      ></iframe>
    </div>
  );
};

Component.displayName = 'SurveySparrow';
