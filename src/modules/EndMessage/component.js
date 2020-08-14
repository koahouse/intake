import React from 'react';

import { useIsMobile } from '../../utils';
import { Subheading } from '../ui';
import { useStrings } from '../I18n';

import styles from './styles.module.css';

export const Component = () => {
  const isMobile = useIsMobile();
  const {
    CHECK_YOUR_INBOX,
    WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS,
  } = useStrings();

  return (
    <div className={styles.container}>
      <Subheading isCentered={!isMobile}>{CHECK_YOUR_INBOX}</Subheading>
      <Subheading isCentered={!isMobile}>
        {WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS}
      </Subheading>
    </div>
  );
};

Component.displayName = 'EndMessage';
