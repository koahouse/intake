import React from 'react';

import { Button } from '../ui';
import { useStrings } from '../I18n';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const {
    THANKS,
    NOW_TO_FIND_A_TIME,
    FIND_A_TIME,
    WE_CHARGE_SIXTY_EUROS,
  } = useStrings();

  return (
    <div className={styles.container}>
      <h1>{THANKS}</h1>
      <p>{NOW_TO_FIND_A_TIME}</p>
      <p>{WE_CHARGE_SIXTY_EUROS}</p>
      <Button onClick={onFinish}>{FIND_A_TIME}</Button>
    </div>
  );
};

Component.displayName = 'BridgeMessage';
