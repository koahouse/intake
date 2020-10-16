export const getPluralisedString = (number, singularString, pluralString) =>
  Number(number) === 1 ? singularString : pluralString;
