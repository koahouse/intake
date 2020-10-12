import { useContext } from 'react';

import { Context } from './context';

export const usePack = () => {
  const pricing = useContext(Context);

  return pricing.pack;
};
