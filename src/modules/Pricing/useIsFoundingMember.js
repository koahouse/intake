import { useContext } from 'react';

import { Context } from './context';

export const useIsFoundingMember = () => {
  const pricing = useContext(Context);

  return pricing.isFoundingMember;
};
