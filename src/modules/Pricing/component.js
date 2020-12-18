import React, { useEffect, useState } from 'react';
import { parse } from 'query-string';

import { useLanguageCode } from '../I18n';

import { getExpiry } from './utils/getExpiry';
import { getPrice } from './utils/getPrice';
import { getCurrencySymbol } from './utils/getCurrencySymbol';
import { Context } from './context';
import { SIX, EUR_CODE } from './constants';

const { currency = EUR_CODE, pack = SIX, d, giftcard } = parse(
  window.location.search
);
const isFoundingMember = d === 'FM';
const isTenpercenter = d === 'TPC';

export const Component = ({ children }) => {
  const [couponId, setCouponId] = useState(null);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [price, setPrice] = useState(null);
  const [priceId, setPriceId] = useState(null);

  const languageCode = useLanguageCode();

  useEffect(() => {
    const asyncGetPrice = async () => {
      const { amount, couponId, discountedAmount, id } = await getPrice({
        currency,
        isFoundingMember,
        isTenpercenter,
        languageCode,
        pack,
      });

      setCouponId(couponId);
      setDiscountedPrice(discountedAmount);
      setPrice(amount);
      setPriceId(id);
    };

    asyncGetPrice();
  }, []);

  return (
    <Context.Provider
      value={{
        couponId,
        currencyCode: currency,
        currencySymbol: getCurrencySymbol(currency),
        discountedPrice,
        expiry: getExpiry(pack),
        giftcard,
        isFoundingMember,
        pack,
        price,
        priceId,
      }}
    >
      {children}
    </Context.Provider>
  );
};

Component.displayName = 'PricingProvider';
