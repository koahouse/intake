import { useContext } from 'react';

import { Context } from './context';

export const useSetIsIndividual = () => {
  const pricing = useContext(Context);

  return pricing.setIsIndividual;
};
