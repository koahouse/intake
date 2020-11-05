import React from 'react';
import { Button, Paragraph } from '@olivahouse/ui';

import { useStrings } from '../I18n';
import { useIsMobile } from '../../utils';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const strings = useStrings();
  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      <Paragraph>{strings.THANKS}</Paragraph>
      <Paragraph>{strings.YOUR_PAYMENT_WAS_SUCCESSFUL}</Paragraph>
      <Paragraph>{strings.NOW_TO_PICK_A_TIME}</Paragraph>
      <div style={{ height: '12px' }} />
      <Button isCentered={!isMobile} onClick={onFinish}>
        {strings.OK}
      </Button>
    </div>
  );
};

Component.displayName = 'Thanks';
