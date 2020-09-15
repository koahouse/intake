import { parse } from 'query-string';

const isIndividual = parse(window.location.search).individual;

export const getSrc = (id, languageCode) =>
  [
    'https://oliva.surveysparrow.com/widget',
    languageCode.includes('es')
      ? '/intake--spanish/tt-246a95'
      : '/intake--english/tt-5031b3',
    `?id=${id}`,
    isIndividual ? `&individual=${isIndividual}` : '',
  ].join('');

// const src = useMemo(
//   () =>
//     languageCode.includes('es')
//       ? `https://oliva.surveysparrow.com/widget?id=${ID}`
//       : `https://oliva.surveysparrow.com/widget/intake--english/tt-5031b3?id=${ID}`,
//   [languageCode]
// );
