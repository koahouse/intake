import React, { useState } from 'react';
import { parse } from 'query-string';

import { Context } from './context';
import { getStrings } from './strings/getStrings';
import { EN, ES } from './constants';

const DEFAULT_LANGUAGE_CODE =
  parse(window.location.search).language ||
  (window.navigator.language && window.navigator.language.startsWith(ES)
    ? ES
    : EN);

export const Component = ({ children }) => {
  const [languageCode, setLanguageCode] = useState(DEFAULT_LANGUAGE_CODE);

  return (
    <Context.Provider
      value={{
        languageCode,
        setLanguageCode,
        strings: getStrings(languageCode),
      }}
    >
      {children}
    </Context.Provider>
  );
};

Component.displayName = 'I18nProvider';
