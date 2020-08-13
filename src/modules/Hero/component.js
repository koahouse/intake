import React, { useState } from 'react';

import { useStrings } from '../I18n';
import { Button, Subheading } from '../ui';
import { Boat } from '../Boat';

import styles from './styles.module.css';

export const Component = ({ step }) => {
  const [isHidden, setIsHidden] = useState(false);
  const {
    NEXT,
    YOUR_JOURNEY_STARTS_HERE,
    YOURE_TAKING_A_POSITIVE_STEP,
    YOURE_MAKING_THE_RIGHT_CHOICE,
    SOME_MORE_COMFORTING_COPY,
  } = useStrings();

  const handleClick = () => setIsHidden(true);

  return (
    <div className={`${styles.container} ${isHidden ? styles.isHidden : ''}`}>
      <Boat step={step} />
      <div
        className={`${styles.sea} ${
          {
            1: styles.seaStep1,
            2: styles.seaStep2,
            3: styles.seaStep3,
            4: styles.seaStep4,
          }[step]
        }`}
      />
      <h1 className={styles.logo}>Oliva</h1>
      <h2 className={styles.heading}>
        {
          {
            0: YOUR_JOURNEY_STARTS_HERE,
            1: YOURE_MAKING_THE_RIGHT_CHOICE,
          }[step]
        }
      </h2>
      <Subheading>
        {
          { 0: YOURE_TAKING_A_POSITIVE_STEP, 1: SOME_MORE_COMFORTING_COPY }[
            step
          ]
        }
      </Subheading>
      <Button onClick={handleClick}>{NEXT}</Button>
      <div className={styles.widescreenFlexPlaceholder} />
    </div>
  );
};

Component.displayName = 'Hero';
