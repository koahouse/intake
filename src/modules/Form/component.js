import React, { useState } from 'react';

import { Acuity } from '../Acuity';
import { SplashMessage } from '../SplashMessage';
import { SurveySparrow } from '../SurveySparrow';
import { EndMessage } from '../EndMessage';

import styles from './styles.module.css';

export const Component = ({ step, setStep }) => {
  const [responseId, setResponseId] = useState(null);

  const handleFinishSplash = () => setStep(1);

  const handleSubmitSurveySparrow = (responseId) => {
    setStep(2);
    setResponseId(responseId);
  };

  const handleSubmitAcuity = () => setStep(3);

  return (
    <div className={styles.container}>
      <div className={{ 0: styles.middle }[step] || styles.up}>
        <SplashMessage onFinish={handleFinishSplash} />
      </div>
      <div className={{ 0: styles.down, 1: styles.middle }[step] || styles.up}>
        <SurveySparrow onSubmit={handleSubmitSurveySparrow} />
      </div>
      <div
        className={
          { 0: styles.down, 1: styles.down, 2: styles.middle }[step] ||
          styles.up
        }
      >
        <Acuity onSubmit={handleSubmitAcuity} responseId={responseId} />
      </div>
      <div className={{ 3: styles.middle }[step] || styles.down}>
        <EndMessage />
      </div>
    </div>
  );
};

Component.displayName = 'Form';
