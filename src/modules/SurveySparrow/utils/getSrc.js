import { parse } from 'query-string';

const isIndividual = parse(window.location.search).individual;

export const getSrc = (id, languageCode) =>
  [
    'https://oliva.surveysparrow.com/widget',
    languageCode.includes('es')
      ? '/intake--spanish/tt-3ea586'
      : '/intake--english/tt-5031b3',
    `?id=${id}`,
    isIndividual ? `&individual=${isIndividual}` : '',
  ].join('');
