import React from 'react';

import { useStrings } from '../I18n';
import { Button } from '../ui';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const strings = useStrings();

  return (
    <div className={styles.container}>
      <Button isCentered onClick={onFinish}>
        {strings.PAY_AND_PICK}
      </Button>
    </div>
  );
};

Component.displayName = 'PrepaymentMessage';
