import React, { useState } from 'react';
import { parse } from 'query-string';

import { useLanguageCode } from '../I18n';

import { getPrice } from './utils/getPrice';
import { Context } from './context';

const DEFAULT_IS_INDIVIDUAL =
  parse(window.location.search).individual === 'false' ? false : true;

export const Component = ({ children }) => {
  const [isIndividual, setIsIndividual] = useState(DEFAULT_IS_INDIVIDUAL);
  const languageCode = useLanguageCode();

  return (
    <Context.Provider
      value={{
        isIndividual,
        setIsIndividual,
        price: getPrice(languageCode, isIndividual),
      }}
    >
      {children}
    </Context.Provider>
  );
};

Component.displayName = 'PricingProvider';
