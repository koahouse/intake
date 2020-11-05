import React from 'react';
import getClassNames from 'classnames';
import { Subheading, SmallPrint } from '@olivahouse/ui';

import { getInterpolatedString, useStrings } from '../I18n';
import { usePack, usePriceComponent } from '../Pricing';

import styles from './styles.module.css';

export const Component = ({ hasBorder }) => {
  const strings = useStrings();
  const pack = usePack();
  const Price = usePriceComponent();

  return (
    <div
      className={getClassNames(styles.container, {
        [styles.hasBorder]: hasBorder,
      })}
    >
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
          <Subheading>
            {strings.PAY} <Price />
          </Subheading>
          <SmallPrint>
            {getInterpolatedString(strings.THE_ONE_OFF_COST, pack)}
          </SmallPrint>
        </div>
      </div>
      <div className={styles.step}>
        <div className={styles.number}>3</div>
        <div className={styles.text}>
          <Subheading>{strings.TO_PICK_A_TIME}</Subheading>
          <SmallPrint>{strings.YOU_GET_SIXTY_MINUTES}</SmallPrint>
        </div>
      </div>
    </div>
  );
};

Component.displayName = 'ThreeSteps';
