import { useContext } from 'react';

import { Context } from './context';

export const useSetLanguageCode = () => {
  const i18n = useContext(Context);

  return i18n.setLanguageCode;
};
