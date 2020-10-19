export const getHost = (languageCode) =>
  `https://${languageCode === 'es' ? 'es' : 'www'}.oliva.house/`;
