import { EUR_CODE, EUR_SYMBOL, GBP_CODE, GBP_SYMBOL } from '../constants';

export const getCurrencySymbol = (currencyCode) =>
  ({ [EUR_CODE]: EUR_SYMBOL, [GBP_CODE]: GBP_SYMBOL }[currencyCode]);
