import React, { useState } from 'react';

import { useIsMobile } from '../../utils';
import { Acuity } from '../Acuity';
import { SplashMessage } from '../SplashMessage';
import { SurveySparrow } from '../SurveySparrow';
import { EndMessage } from '../EndMessage';

import styles from './styles.module.css';

export const Component = ({ step, setStep }) => {
  const isMobile = useIsMobile();
  const [isTransparent, setIsTransparent] = useState(isMobile);
  const [isVisible, setIsVisible] = useState(true);
  const [responseId, setResponseId] = useState(null);

  const handleMobileTransition = () => {
    if (!isMobile) return;
    window.requestAnimationFrame(() => setIsVisible(false));
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        setIsVisible(true);
        setIsTransparent(false);
      });
    }, 3500);
  };

  const handleFinishSplash = () => {
    handleMobileTransition();
    setStep(1);
  };

  const handleSubmitSurveySparrow = (responseId) => {
    handleMobileTransition();
    setStep(2);
    setResponseId(responseId);
  };

  const handleSubmitAcuity = () => {
    setIsTransparent(isMobile);
    setStep(3);
  };

  return (
    <div
      className={styles.container}
      style={{
        background: isTransparent && 'transparent',
        opacity: isVisible ? 1 : 0,
        transition: isVisible && 'opacity 0.4s ease-in',
        willChange: 'opacity',
      }}
    >
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
