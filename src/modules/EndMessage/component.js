import React from 'react';

import { useIsMobile } from '../../utils';
import { Subheading } from '../ui';
// import { useStrings } from '../I18n';

import envelope from './envelope.png';
import styles from './styles.module.css';

export const Component = () => {
  const isMobile = useIsMobile();
  // const { WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS } = useStrings();

  return (
    <div className={styles.container}>
      <img alt="envelope" src={envelope} />
      <Subheading isCentered={!isMobile}>
        You’ll receive an email with all the details.
      </Subheading>
    </div>
  );
};

Component.displayName = 'EndMessage';
