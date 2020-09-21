import React from 'react';
import 'react-dropdown/style.css';

import { Subheading, SmallPrint } from '../ui';
import { useStrings } from '../I18n';
import { usePrice } from '../Pricing';

import styles from './styles.module.css';

export const Component = ({ hasBorder }) => {
  const strings = useStrings();
  const price = usePrice();

  return (
    <div className={`${styles.container} ${hasBorder && styles.hasBorder}`}>
      <div className={styles.step}>
        <div className={styles.number}>1</div>
        <div className={styles.text}>
          <Subheading>{strings.ANSWER_A_FEW_QUESTIONS}</Subheading>
          <SmallPrint>{strings.YOUR_ANSWERS_ARE_CONFIDENTIAL}</SmallPrint>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>2</div>
        <div className={styles.text}>
          <Subheading>{strings.TO_PICK_A_TIME}</Subheading>
          <SmallPrint>{strings.YOU_GET_SIXTY_MINUTES}</SmallPrint>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>3</div>
        <div className={styles.text}>
          <Subheading>
            {strings.PAY} {price}
          </Subheading>
          <SmallPrint>{strings.THE_ONE_OFF_COST}</SmallPrint>
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'ThreeSteps';
