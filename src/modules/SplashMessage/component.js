import React from 'react';
import { Button } from '@olivahouse/ui';

import { useStrings } from '../I18n';
import { useIsMobile } from '../../utils';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const strings = useStrings();
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className={styles.container}>
      <Button isCentered={!isMobile} onClick={onFinish}>
        {strings.GET_STARTED}
      </Button>
    </div>
  );
};

Component.displayName = 'SplashMessage';
