import { useContext } from 'react';

import { Context } from './context';

export const useIsIndividual = () => {
  const pricing = useContext(Context);

  return pricing.isIndividual;
};
