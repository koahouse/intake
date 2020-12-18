import React from 'react';
import { Button } from '@olivahouse/ui';

import { useStrings } from '../I18n';
import { useGiftcard } from '../Pricing';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const strings = useStrings();
  const giftcard = useGiftcard();

  return (
    <div className={styles.container}>
      <Button isCentered onClick={onFinish}>
        {!!giftcard ? strings.PICK_A_TIME : strings.PAY_AND_PICK}
      </Button>
    </div>
  );
};

Component.displayName = 'PrepaymentMessage';
