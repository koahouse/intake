import React, { useEffect, useCallback } from 'react';
import { v4 as uuid } from 'uuid';

import { useLanguageCode } from '../I18n';

import { getIsIndividual } from './utils/getIsIndividual';
import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

const ID = uuid().replace(/-/g, '').substring(0, 8);

export const Component = ({ onSubmit }) => {
  const languageCode = useLanguageCode();
  const isIndividual = true;

  const handleMessage = useCallback(
    (event) => {
      if (!event || !event.data) return;

      if (event.data.type === 'surveyCompleted') {
        onSubmit(ID, getIsIndividual(event.data));
        return;
      }
    },
    [onSubmit]
  );

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  const src = getSrc(ID, languageCode, isIndividual);

  return (
    <div className={styles.container}>
      <iframe
        allowFullScreen=""
        id="ss_widget_frame"
        src={src}
        title="questionnaire"
      ></iframe>
    </div>
  );
};

Component.displayName = 'SurveySparrow';
