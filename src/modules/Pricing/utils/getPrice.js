export const getPrice = (languageCode, isIndividual) => {
  switch (true) {
    case languageCode === 'es' && isIndividual:
      return '€80';
    case languageCode === 'es' && !isIndividual:
      return '€110';
    case languageCode === 'en' && isIndividual:
      return '£80';
    case languageCode === 'en' && !isIndividual:
      return '£110';
  }
};
