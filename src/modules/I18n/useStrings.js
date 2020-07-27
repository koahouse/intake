import { useContext } from 'react';

import { Context } from './context';

export const useStrings = () => {
  const i18n = useContext(Context);

  return i18n.strings;
};
