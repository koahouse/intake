export const getPrice = (languageCode, pack) =>
  ({
    es: {
      3: '€255',
      6: '€480',
      9: '€840',
    },
    en: {
      3: '£375',
      6: '£690',
      9: '£1,320',
    },
  }[languageCode][pack]);
