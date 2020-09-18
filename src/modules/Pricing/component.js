import React, { useState } from 'react';

import { useLanguageCode } from '../I18n';

import { getPrice } from './utils/getPrice';
import { Context } from './context';

export const Component = ({ children }) => {
  const [isIndividual, setIsIndividual] = useState(true);
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
