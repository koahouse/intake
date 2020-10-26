import React from 'react';
import { parse } from 'query-string';

import { useLanguageCode } from '../I18n';

import { getExpiry } from './utils/getExpiry';
import { getPrice } from './utils/getPrice';
import { Context } from './context';

const { pack = '6', d } = parse(window.location.search);
const isFoundingMember = pack === '3' && d === 'FM';

export const Component = ({ children }) => {
  const languageCode = useLanguageCode();

  return (
    <Context.Provider
      value={{
        expiry: getExpiry(pack),
        isFoundingMember,
        pack,
        price: getPrice(languageCode, pack, isFoundingMember),
      }}
    >
      {children}
    </Context.Provider>
  );
};

Component.displayName = 'PricingProvider';
