import React from 'react';
import { parse } from 'query-string';

import { useLanguageCode } from '../I18n';

import { getExpiry } from './utils/getExpiry';
import { getPrice } from './utils/getPrice';
import { Context } from './context';

const pack = parse(window.location.search).pack || '6';

export const Component = ({ children }) => {
  const languageCode = useLanguageCode();

  return (
    <Context.Provider
      value={{
        expiry: getExpiry(pack),
        pack,
        price: getPrice(languageCode, pack),
      }}
    >
      {children}
    </Context.Provider>
  );
};

Component.displayName = 'PricingProvider';
