import { stringify } from 'query-string';

export const getPrice = async ({
  currency,
  isFoundingMember,
  isTenpercenter,
  languageCode,
  pack,
}) => {
  const queryString = stringify({
    currencyCode: currency,
    isTenpercenter: isTenpercenter || undefined,
    isFoundingMember: isFoundingMember || undefined,
    languageCode,
    pack,
  });

  return global
    .fetch(
      `https://mrazu50nsj.execute-api.us-east-1.amazonaws.com/dev/getPrice?${queryString}`
    )
    .then((response) => response.json());
};
