import React from 'react';

import { useStrings } from '../I18n';
import { Subheading } from '../ui';
import { Boat } from '../Boat';
import { Sea } from '../Sea';

import { getHeadingForStep } from './utils/getHeadingForStep';
import { getSubHeadingForStep } from './utils/getSubHeadingForStep';
import styles from './styles.module.css';

export const Component = ({ step }) => {
  const strings = useStrings();

  return (
    <div className={styles.container}>
      <Boat step={step} />
      <Sea step={step} />
      <h1 className={styles.logo}>Oliva</h1>
      <h2 className={styles.heading}>{getHeadingForStep(strings, step)}</h2>
      <Subheading>{getSubHeadingForStep(strings, step)}</Subheading>
    </div>
  );
};

Component.displayName = 'Hero';
