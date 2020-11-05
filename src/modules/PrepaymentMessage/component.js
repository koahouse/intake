import React from 'react';
import { Button } from '@olivahouse/ui';

import { useStrings } from '../I18n';

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
