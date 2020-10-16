import React from 'react';

import { SmallPrint } from '../SmallPrint';

import src from './check-draw@3x.png';
import styles from './styles.module.css';

export const Component = ({ items }) => (
  <div className={styles.container}>
    {items.map((item) => (
      <div className={styles.item} key={item}>
        <img className={styles.checkmark} src={src} />
        <SmallPrint>{item}</SmallPrint>
      </div>
    ))}
  </div>
);

Component.displayName = 'Bullets';
