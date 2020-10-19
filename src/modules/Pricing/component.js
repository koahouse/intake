import React from 'react';
import { parse } from 'query-string';

import { useLanguageCode } from '../I18n';

import { getExpiry } from './utils/getExpiry';
import { getPrice } from './utils/getPrice';
import { Context } from './context';

const pack = parse(window.location.search).pack || '6';
const isFoundingMember = parse(window.location.search).d === 'FM';
const isAM = parse(window.location.search).d === 'AM';

export const Component = ({ children }) => {
  const languageCode = useLanguageCode();

  return (
    <Context.Provider
      value={{
        expiry: getExpiry(pack),
        isAM,
        isFoundingMember,
        pack,
        price: getPrice(languageCode, pack, isFoundingMember, isAM),
      }}
    >
      {children}
    </Context.Provider>
  );
};

Component.displayName = 'PricingProvider';
