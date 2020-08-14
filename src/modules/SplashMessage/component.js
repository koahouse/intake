import React from 'react';

import { useIsMobile } from '../../utils';
import { Button, Subheading } from '../ui';
import { useStrings } from '../I18n';

import styles from './styles.module.css';

export const Component = ({ onFinish }) => {
  const isMobile = useIsMobile();
  const {
    START_QUESTIONNAIRE,
    THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES,
  } = useStrings();

  return (
    <div className={styles.container}>
      <Button isCentered={!isMobile} onClick={onFinish}>
        {START_QUESTIONNAIRE}
      </Button>
      <Subheading isCentered={!isMobile}>
        {THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES}
      </Subheading>
    </div>
  );
};

Component.displayName = 'BridgeMessage';
