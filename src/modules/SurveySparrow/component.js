import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { useLanguageCode } from '../I18n';
import { useIsIndividual } from '../Pricing';

import { getIsIndividual } from './utils/getIsIndividual';
import { getSrc } from './utils/getSrc';
import styles from './styles.module.css';

const ID = uuid().replace(/-/g, '').substring(0, 8);

export const Component = ({ onSubmit }) => {
  const languageCode = useLanguageCode();
  const isIndividual = useIsIndividual();

  const handleMessage = (event) => {
    if (!event || !event.data) return;

    if (event.data.type === 'surveyCompleted') {
      onSubmit(ID, getIsIndividual(event.data));
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  const src = getSrc(ID, languageCode, isIndividual);

  return (
    <div className={styles.container}>
      <iframe allowFullScreen="" id="ss_widget_frame" src={src}></iframe>
    </div>
  );
};

Component.displayName = 'SurveySparrow';
