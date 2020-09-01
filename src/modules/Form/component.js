import React, { useState, useEffect } from 'react';

import { useIsMobile } from '../../utils';
import { Acuity } from '../Acuity';
import { SplashMessage } from '../SplashMessage';
import { SurveySparrow } from '../SurveySparrow';

import styles from './styles.module.css';

export const Component = ({ step, setStep }) => {
  const isMobile = useIsMobile();
  const [responseId, setResponseId] = useState(null);
  const [isIndividual, setIsIndividual] = useState(null);

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

  const handleSubmitSurveySparrow = (responseId, isIndividual) => {
    setStep(3);
    setResponseId(responseId);
    setIsIndividual(isIndividual);
  };

  const handleSubmitAcuity = () => {
    setStep(5);
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
          [styles.down, styles.down, styles.down][step] || styles.middle
        }
      >
        <Acuity
          isIndividual={isIndividual}
          onSubmit={handleSubmitAcuity}
          responseId={responseId}
        />
      </div>
    </div>
  );
};

Component.displayName = 'Form';
