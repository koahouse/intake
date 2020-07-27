import React, { useState } from 'react';

import { Context } from './context';
import { getStrings } from './strings/getStrings';

export const Component = ({ children }) => {
  const [languageCode, setLanguageCode] = useState(window.navigator.language);

  return (
    <Context.Provider
      value={{
        setLanguageCode,
        strings: getStrings(languageCode),
      }}
    >
      {children}
    </Context.Provider>
  );
};

Component.displayName = 'I18nProvider';
