export const getSrc = (id, languageCode, isIndividual) =>
  [
    'https://oliva.surveysparrow.com/widget',
    languageCode.includes('es')
      ? '/intake--spanish/tt-3ea586'
      : '/intake--english/tt-5031b3',
    `?id=${id}`,
    `&individual=${isIndividual}`,
  ].join('');
