import React, { useState } from 'react';

import { useStrings } from '../I18n';
import { Button } from '../ui';

import styles from './styles.module.css';
import { ReactComponent as Logo } from './koa-logo.svg';
import nads from './nads.png';

export const Component = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { NEXT, WELCOME_TO_YOUR_KOA_JOURNEY } = useStrings();

  const handleClick = () => setIsHidden(true);

  return (
    <div className={`${styles.container} ${isHidden ? styles.isHidden : ''}`}>
      <img alt="strong woman" className={styles.image} src={nads} />
      <Logo />
      <h1 className={styles.heading}>{WELCOME_TO_YOUR_KOA_JOURNEY}</h1>
      <Button onClick={handleClick}>{NEXT}</Button>
      <div className={styles.widescreenFlexPlaceholder} />
    </div>
  );
};

Component.displayName = 'Hero';
