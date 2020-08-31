import React from 'react';

import { useIsMobile } from '../../utils';
import { Button } from '../ui';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className={styles.container}>
      <Button isCentered={!isMobile} onClick={onFinish}>
        Get started
      </Button>
    </div>
  );
};

Component.displayName = 'BridgeMessage';
