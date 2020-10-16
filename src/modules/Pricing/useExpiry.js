import { useContext } from 'react';

import { Context } from './context';

export const useExpiry = () => {
  const pricing = useContext(Context);

  return pricing.expiry;
};
