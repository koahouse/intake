import { en } from './en';
import { ca } from './ca';
import { es } from './es';

export const getStrings = (languageCode) => {
  if (!languageCode) return en;

  switch (true) {
    case languageCode.startsWith('ca'):
      return ca;
    case languageCode.startsWith('es') || languageCode.includes('-ES'):
      return es;
    default:
      return en;
  }
};
