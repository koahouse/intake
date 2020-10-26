import React, { Fragment } from 'react';
import getClassNames from 'classnames';

import { useLanguageCode } from '../I18n';

import { adaptPrice } from './utils/adaptPrice';
import { usePricing } from './usePricing';
import styles from './styles.module.css';

export const usePriceComponent = () => {
  const languageCode = useLanguageCode();
  const { currencyCode, discountedPrice, price } = usePricing();

  const adaptedDiscountedPrice =
    discountedPrice && adaptPrice(discountedPrice, currencyCode, languageCode);
  const adaptedPrice = adaptPrice(price, currencyCode, languageCode);

  return () => (
    <span
      className={getClassNames(styles.container, {
        [styles.isLoaded]: price !== null,
      })}
    >
      {!!adaptedDiscountedPrice ? (
        <Fragment>
          <span className={styles.price}>{adaptedPrice}</span>
          <span className={styles.discountedPrice}>
            {adaptedDiscountedPrice}
          </span>
          🎉
        </Fragment>
      ) : (
        adaptedPrice
      )}
    </span>
  );
};
