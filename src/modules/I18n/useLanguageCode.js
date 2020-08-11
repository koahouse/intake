import { useContext } from 'react';

import { Context } from './context';

export const useLanguageCode = () => {
  const i18n = useContext(Context);

  return i18n.languageCode;
};
