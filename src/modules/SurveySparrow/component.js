import React, { useEffect, useMemo } from 'react';
import { v4 as uuid } from 'uuid';

import { useLanguageCode } from '../I18n';

import styles from './styles.module.css';

const ID = uuid().replace(/-/g, '');

export const Component = ({ onSubmit }) => {
  const languageCode = useLanguageCode();

  const handleMessage = (event) => {
    if (!event || !event.data) return;

    if (event.data.type === 'surveyCompleted') {
      onSubmit(ID);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const src = useMemo(
    () =>
      languageCode === 'es'
        ? `https://koa.surveysparrow.com/widget/intake--spanish/tt-246a95?id=${ID}`
        : `https://koa.surveysparrow.com/widget/intake--english/tt-5031b3?id=${ID}`,
    [languageCode]
  );

  return (
    <div className={styles.container}>
      <iframe allowFullScreen="" id="ss_widget_frame" src={src}></iframe>
    </div>
  );
};

Component.displayName = 'SurveySparrow';
