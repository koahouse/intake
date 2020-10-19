import { useContext } from 'react';

import { Context } from './context';

export const useIsAM = () => {
  const pricing = useContext(Context);

  return pricing.isAM;
};
