import React from 'react';

import { useStrings } from '../I18n';
import { useIsMobile } from '../../utils';
import { Button, Subheading } from '../ui';
import { Configurator } from '../Configurator';
import { ThreeSteps } from '../ThreeSteps';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const strings = useStrings();
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className={styles.container}>
      <Configurator />
      <Subheading>{strings.IN_THE_NEXT_TEN_MINUTES}</Subheading>
      <ThreeSteps hasBorder />
      <Button isCentered={!isMobile} onClick={onFinish}>
        {strings.GET_STARTED}
      </Button>
    </div>
  );
};

Component.displayName = 'BridgeMessage';
