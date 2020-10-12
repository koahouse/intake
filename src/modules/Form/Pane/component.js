import React from 'react';
import getClassNames from 'classnames';

import styles from './styles.module.css';

export const Component = ({
  children,
  shouldRemainShowing = false,
  showOnStep,
  step,
}) => (
  <div
    className={getClassNames(
      styles.pane,
      [...Array(showOnStep).fill(styles.down), styles.middle][step] ||
        (shouldRemainShowing ? styles.middle : styles.up)
    )}
  >
    {children}
  </div>
);

Component.displayName = 'Pane';
