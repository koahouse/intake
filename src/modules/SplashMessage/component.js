import React from 'react';

import { Button, Subheading } from '../ui';
import { useStrings } from '../I18n';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const {
    START_QUESTIONNAIRE,
    THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES,
  } = useStrings();

  return (
    <div className={styles.container}>
      <Button onClick={onFinish}>{START_QUESTIONNAIRE}</Button>
      <Subheading isCentered>{THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES}</Subheading>
    </div>
  );
};

Component.displayName = 'BridgeMessage';
