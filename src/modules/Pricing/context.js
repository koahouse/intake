import React from 'react';

export const Context = React.createContext({
  isIndividual: false,
  setIsIndividual: () => {},
  price: '',
});
