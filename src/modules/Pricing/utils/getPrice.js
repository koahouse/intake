export const getPrice = (languageCode, pack, isFoundingMember, isAM) => {
  if (isAM && pack === '3') {
    return languageCode === 'es' ? '€60' : '£145';
  }

  if (isFoundingMember && pack === '3') {
    return languageCode === 'es' ? '€150' : '£225';
  }

  return {
    es: {
      3: '€255',
      6: '€480',
      12: '€840',
    },
    en: {
      3: '£375',
      6: '£690',
      12: '£1,320',
    },
  }[languageCode][pack];
};
