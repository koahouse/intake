export const getSrc = (id, languageCode, isIndividual) =>
  [
    'https://oliva.surveysparrow.com/widget',
    languageCode.includes('es')
      ? '/intake--spanish/tt-890999'
      : '/intake--english/tt-5031b3',
    `?id=${id}`,
    `&individual=${isIndividual}`,
  ].join('');
