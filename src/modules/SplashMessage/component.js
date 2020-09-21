import React from 'react';

import { useStrings } from '../I18n';
import { useIsMobile } from '../../utils';
import { Button, SmallPrint } from '../ui';
import { Configurator } from '../Configurator';
import { usePrice } from '../Pricing';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const strings = useStrings();
  const isMobile = useIsMobile();
  const price = usePrice();

  if (isMobile) return null;

  return (
    <div className={styles.container}>
      <Configurator />
      <div className={styles.price}>
        <span>{price} </span>
        <SmallPrint>/ {strings.SIXTY_MINUTE_VIDEO_CALL}</SmallPrint>
      </div>
      <Button isCentered={!isMobile} onClick={onFinish}>
        {strings.GET_STARTED}
      </Button>
    </div>
  );
};

Component.displayName = 'BridgeMessage';
