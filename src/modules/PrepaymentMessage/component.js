import React from 'react';

import { useStrings } from '../I18n';
import { useIsMobile } from '../../utils';
import { Button } from '../ui';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const strings = useStrings();
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className={styles.container}>
      <Button isCentered={!isMobile} onClick={onFinish}>
        {strings.OK}
      </Button>
    </div>
  );
};

Component.displayName = 'PrepaymentMessage';
