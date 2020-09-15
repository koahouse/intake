import React from 'react';
import { parse } from 'query-string';

import { Context } from './context';
import { getStrings } from './strings/getStrings';

const DEFAULT_LANGUAGE_CODE = 'en';

const languageCode =
  parse(window.location.search).language || DEFAULT_LANGUAGE_CODE;

export const Component = ({ children }) => (
  <Context.Provider
    value={{
      languageCode,
      strings: getStrings(languageCode),
    }}
  >
    {children}
  </Context.Provider>
);

Component.displayName = 'I18nProvider';
