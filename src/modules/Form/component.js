import React, { useState } from 'react';

import { Acuity } from '../Acuity';
import { BridgeMessage } from '../BridgeMessage';
import { SurveySparrow } from '../SurveySparrow';

import styles from './styles.module.css';

export const Component = () => {
  const [step, setStep] = useState(0);
  const [contactDetails, setContactDetails] = useState(null);

  const handleSubmitSurveySparrow = (contactDetails) => {
    setStep(1);
    setContactDetails(contactDetails);
  };

  const handleFinishBridge = () => setStep(2);

  return (
    <div className={styles.container}>
      <div className={{ 0: styles.middle, 1: styles.up, 2: styles.up }[step]}>
        <SurveySparrow onSubmit={handleSubmitSurveySparrow} />
      </div>
      <div className={{ 0: styles.down, 1: styles.middle, 2: styles.up }[step]}>
        <BridgeMessage onFinish={handleFinishBridge} />
      </div>
      <div
        className={{ 0: styles.down, 1: styles.down, 2: styles.middle }[step]}
      >
        <Acuity contactDetails={contactDetails} />
      </div>
    </div>
  );
};

Component.displayName = 'Form';
