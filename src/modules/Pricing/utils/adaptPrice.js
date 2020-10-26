export const adaptPrice = (price, currencyCode, languageCode) =>
  new Intl.NumberFormat(languageCode, {
    style: 'currency',
    currency: currencyCode,
  })
    .format(price / 100)
    .replace(/\D00(?=\D*$)/, '');
