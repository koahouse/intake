import { useContext } from 'react';

import { Context } from './context';

export const usePrice = () => {
  const pricing = useContext(Context);

  return pricing.price;
};
