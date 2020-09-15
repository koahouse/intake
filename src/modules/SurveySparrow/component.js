import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { useLanguageCode } from '../I18n';

import { getIsIndividual } from './utils/getIsIndividual';
import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

const ID = uuid().replace(/-/g, '');

export const Component = ({ onSubmit }) => {
  const languageCode = useLanguageCode();

  const handleMessage = (event) => {
    if (!event || !event.data) return;

    if (event.data.type === 'surveyCompleted') {
      const isIndividual = getIsIndividual(event.data);

      onSubmit(ID, isIndividual);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const src = getSrc(ID, languageCode);

  return (
    <div className={styles.container}>
      <iframe allowFullScreen="" id="ss_widget_frame" src={src}></iframe>
    </div>
  );
};

Component.displayName = 'SurveySparrow';
