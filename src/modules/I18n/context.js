import React from 'react';

import { getStrings } from './strings/getStrings';

export const Context = React.createContext({
  setLanguageCode: () => {},
  strings: getStrings(),
});
