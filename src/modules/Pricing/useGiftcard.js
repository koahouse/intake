import { useContext } from 'react';

import { Context } from './context';

export const useGiftcard = () => {
  const pricing = useContext(Context);

  return pricing.giftcard;
};
