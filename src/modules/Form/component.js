import React, { useState, useEffect } from 'react';

import { useIsMobile } from '../../utils';
import { Acuity } from '../Acuity';
import { SplashMessage } from '../SplashMessage';
import { SurveySparrow } from '../SurveySparrow';
import { EndMessage } from '../EndMessage';

import styles from './styles.module.css';

export const Component = ({ step, setStep }) => {
  const isMobile = useIsMobile();
  const [responseId, setResponseId] = useState(null);

  const [isContainerVisible, setIsContainerVisible] = useState(!isMobile);

  useEffect(() => {
    if (!isMobile) return;

    window.requestAnimationFrame(() =>
      setIsContainerVisible([2, 4].includes(step))
    );
  }, [step]);

  const handleFinishSplashScreen = () => {
    setStep(2);
  };

  const handleSubmitSurveySparrow = (responseId) => {
    setStep(4);
    setResponseId(responseId);
  };

  const handleSubmitAcuity = () => {
    setStep(6);
  };

  return (
    <div
      className={`${styles.container} ${
        isContainerVisible ? styles.visible : ''
      }`}
    >
      {!isMobile && (
        <div className={[styles.middle][step] || styles.up}>
          <SplashMessage onFinish={handleFinishSplashScreen} />
        </div>
      )}
      <div
        className={[styles.down, styles.down, styles.middle][step] || styles.up}
      >
        <SurveySparrow onSubmit={handleSubmitSurveySparrow} />
      </div>
      <div
        className={
          [styles.down, styles.down, styles.down, styles.down, styles.middle][
            step
          ] || styles.up
        }
      >
        <Acuity onSubmit={handleSubmitAcuity} responseId={responseId} />
      </div>
      {!isMobile && (
        <div className={[, , , , , , styles.middle][step] || styles.down}>
          <EndMessage />
        </div>
      )}
    </div>
  );
};

Component.displayName = 'Form';
