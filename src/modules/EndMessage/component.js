import React from 'react';

import { Subheading } from '../ui';
import { useStrings } from '../I18n';

import styles from './styles.module.css';

export const Component = () => {
  const {
    CHECK_YOUR_INBOX,
    WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS,
  } = useStrings();

  return (
    <div className={styles.container}>
      <Subheading isCentered>{CHECK_YOUR_INBOX}</Subheading>
      <Subheading isCentered>
        {WEVE_SENT_YOU_SOMETHING_WITH_ALL_THE_DETAILS}
      </Subheading>
    </div>
  );
};

Component.displayName = 'EndMessage';
