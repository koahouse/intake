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

  if (isMobile) return null;

  return (
    <div className={styles.container}>
      <Button isCentered={!isMobile} onClick={onFinish}>
        Get started
      </Button>
      <Subheading isCentered={!isMobile}>
        To help you make the most of your intro meeting, we’ll start by getting
        to know you with a few questions.
      </Subheading>
      <Subheading isCentered={!isMobile}>
        {THIS_WILL_TAKE_FIVE_TO_TEN_MINUTES}
      </Subheading>
    </div>
  );
};

Component.displayName = 'BridgeMessage';
