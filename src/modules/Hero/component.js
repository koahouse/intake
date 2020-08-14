import React, { useState } from 'react';

import { useStrings } from '../I18n';
import { Button, Subheading } from '../ui';
import { Boat } from '../Boat';
import { Sea } from '../Sea';

import { getHeadingForStep } from './utils/getHeadingForStep';
import { getSubHeadingForStep } from './utils/getSubHeadingForStep';
import styles from './styles.module.css';

export const Component = ({ step }) => {
  const [isHidden, setIsHidden] = useState(false);
  const { NEXT, ...strings } = useStrings();

  const handleClick = () => setIsHidden(true);

  return (
    <div className={`${styles.container} ${isHidden ? styles.isHidden : ''}`}>
      <Boat step={step} />
      <Sea step={step} />
      <h1 className={styles.logo}>Oliva</h1>
      <h2 className={styles.heading}>{getHeadingForStep(strings, step)}</h2>
      <Subheading>{getSubHeadingForStep(strings, step)}</Subheading>
      <Button onClick={handleClick}>{NEXT}</Button>
      <div className={styles.widescreenFlexPlaceholder} />
    </div>
  );
};

Component.displayName = 'Hero';
